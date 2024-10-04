/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import admin from 'firebase-admin'
import departuresRouter from './routes/departuresRoutes.js'

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

app.use(cors(corsOptions))

let adminApp;
if (typeof window === 'undefined') {
  adminApp = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: 'fir-login-4f13b',
  });
}

// Middleware to verify Firebase token
async function verifyToken(req, res, next) {
  if(process.env.NODE_ENV === 'test') {
    console.log(`do not verify token value env: ${process.env.NODE_ENV}`);
    next();
  }
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(401).send('Authorization header missing')
  }
  const token = authHeader.split(' ')[1]
  try {
    const decodedToken = await adminApp.auth().verifyIdToken(token)
    req.user = decodedToken
    next()
  } catch (error) {
    return res.status(401).send('Invalid token')
  }
}

// Apply the middleware to all routes starting with /api/
// app.use('/api', verifyToken);

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
  } catch (err) {
    console.error('Error starting server: ', err)
  }
}

startServer(PORT)
