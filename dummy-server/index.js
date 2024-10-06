/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import admin from 'firebase-admin'
import departuresRouter from './routes/departuresRoutes.js'

import jwt from 'jsonwebtoken'

import * as fs from 'fs'
import path from 'path'

import { OAuth2Client } from 'google-auth-library'

// microsoft
const CLIENT_ID_MICROSOFT = process.env.CLIENT_ID_MICROSOFT

// google
const CLIENT_ID_GOOGLE = process.env.CLIENT_ID_GOOGLE
const client = new OAuth2Client(CLIENT_ID_GOOGLE)

// required to verify requests with email and password, config firebase
const serviceAccountPath = path.resolve('src/firebase/service_account.json')
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'))

dotenv.config({ path: '.env.dummy-server' })
const PORT = process.env.PORT || 8021

const app = express()
app.use(express.json())

// function to generate origins allowed based in the actual port
const generateAllowedOrigins = (port) => [
  `http://localhost:${port}`,
  `http://127.0.0.1:${port}`,
  'http://localhost:8124',
  'http://127.0.0.1:8124'
]
let allowedOrigins = generateAllowedOrigins(PORT) // Initially for port 8022

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}

if (process.env.NODE_ENV === 'test') {
  app.use(cors())
} else {
  app.use(cors(corsOptions))
}

const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  project_id: process.env.PROJECT_ID_FIREBASE
})

async function verifyToken(req, res, next) {
  if (process.env.NODE_ENV === 'test') {
    console.log('Skipping token verification in test mode.')
    return next()
  }

  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(401).send('Authorization header missing')
  }

  const token = authHeader.split(' ')[1]

  // First we trying verify with Firebase (email and password)
  try {
    const decodedToken = await adminApp.auth().verifyIdToken(token)
    req.user = decodedToken
    return next() // Token verificado con Firebase
  } catch (firebaseError) {
    console.log('Firebase token verification failed, trying Google verification.')
  }

  // If worng Firebase, we trying verify as google token
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID_GOOGLE
    })
    const payload = ticket.getPayload()
    req.user = payload
    return next()
  } catch (googleError) {
    console.log('Google token verification failed, trying Microsoft verification.')
  }

  // If worng Firebase, we trying verify as microsoft token
  try {
    const decodedToken = jwt.decode(token)
    if (decodedToken.aud !== CLIENT_ID_MICROSOFT) {
      return res.status(401).send('Invalid audience')
    }
    req.user = decodedToken
    return next()
  } catch (microsoftError) {
    console.error('Error verifying Microsoft token:', microsoftError)
    return res.status(401).send('Invalid token')
  }
}

app.use('/api', verifyToken)

// routes
app.use('/api/departures', departuresRouter)

const startServer = (port) => {
  let actualPort = ''
  try {
    const server = app.listen(port, async () => {
      actualPort = server.address().port
      console.log(`Server listening on port ${actualPort}`)
      allowedOrigins = generateAllowedOrigins(actualPort)
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Trying another port...`)
        startServer(0)
      } else {
        console.error('Server error:', err)
      }
    })

    return server
  } catch (err) {
    console.error('Error starting server: ', err)
  }
}

startServer(PORT)

export default startServer
