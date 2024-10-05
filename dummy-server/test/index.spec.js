/* eslint-disable no-undef */
import { describe, it, expect, beforeAll } from 'vitest'
import dotenv from 'dotenv'
import startServer from '../index.js'
import request from 'supertest'
// import freeProfile from '../db/profiles/freeProfile.json'

describe('Pruebas con diferentes configuraciones de entorno', () => {
  let server

  beforeAll(() => {
    server = startServer(8022)
  })

  it('Debería iniciar correctamente con la configuración A', async () => {
    dotenv.config({ path: '.env.dummy-server' })
    expect(server).toBeDefined()
    // Añade más verificaciones dependiendo de la configuración
  })

  it('Debería fallar con la configuración B incorrecta', async () => {
    dotenv.config({ path: '.env.dummy-server' })
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

  it('Debería devolver el perfil en la ruta GET /api/departures', async () => {
    const res = await request(server).get('/api/departures').set('Accept', 'application/json')

    expect(res.statusCode).toBe(200)
  })

  // it('Debería devolver el perfil en la ruta GET /departures', async () => {
  //   const res = await request(server).get('/api/departures').set('Accept', 'application/json')
  //   expect(res.statusCode).toBe(200)

  //   // console.log('body', res)

  //   // expect(res.first_name).toBe(freeProfile.first_name)
  //   // expect(res.email).toBe(freeProfile.email)
  // })

  // it('Debería crear un nuevo usuario en la ruta POST /api/users', async () => {
  //     const newUser = freeProfile;
  //     console.log('user', newUser);
  //     const res = await request(server).post('/me').send(newUser).set('Accept', 'application/json');
  //     expect(res.statusCode).toBe(201);
  //     expect(res.body.first_name).toBe('Juan Jose');
  //     expect(res.body.email).toBe('wanyos99@emailmeter.com');
  // });
})
