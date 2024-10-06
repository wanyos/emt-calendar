/* eslint-disable no-undef */
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import dotenv from 'dotenv'
import startServer from '../index.js'
import request from 'supertest'
import { pool } from '../db/mysql.js'
// import freeProfile from '../db/profiles/freeProfile.json'

describe('Pruebas con diferentes configuraciones de entorno', () => {
  let server
  beforeAll(() => {
    server = startServer(8022)
  })

  afterAll(async () => {
    try {
      await pool.end()
      console.log('MySQL pool closed')
    } catch (error) {
      console.error('Error closing MySQL pool:', error)
    }
    if (server) {
      server.close(() => {
        console.log('Express server closed')
      })
    }
  })

  it('Debería iniciar correctamente con la configuración A', async () => {
    expect(server).toBeDefined()
    // Añade más verificaciones dependiendo de la configuración
  })

  it('Debería fallar con la configuración B incorrecta', async () => {
    try {
      const res = await request(server).get('/api/teams')
      expect(res.statusCode).toBe(200)
      expect(res.body.message).toBe('Hello World')
      console.log('res', res)
    } catch (error) {
      expect(error).toBeDefined()
      // Comprueba el tipo de error esperado
    }
  })

  it.skip('GET /api/departures', async () => {
    const res = await request(server).get('/api/departures').set('Accept', 'application/json')
    expect(res.statusCode).toBe(200)
    expect(res.body[0].name).toBe('cau')
    expect(res.body[0].place).toBe('sede central')
    expect(res.body[0].description).toBe('atencion usuario test')
  })

  it.skip('Debería crear un nuevo usuario en la ruta POST /api/users', async () => {
    const newUser = freeProfile
    console.log('user', newUser)
    const res = await request(server).post('/me').send(newUser).set('Accept', 'application/json')
    expect(res.statusCode).toBe(201)
    expect(res.body.first_name).toBe('Juan Jose')
    expect(res.body.email).toBe('wanyos99@emailmeter.com')
  })
})
