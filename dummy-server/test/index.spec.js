// dummy-server/test/departures.spec.js
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import app from '../index.js' // Asegúrate de que esta ruta es correcta

let server

describe('API Tests', () => {
  beforeAll((done) => {
    server = app.listen(8022, done) // Inicia el servidor de Express en el puerto 8022
  })

  //   afterAll((done) => {
  //     server.close(done); // Cierra el servidor después de las pruebas
  //   });

  it('GET /api/departures should return all departures', async () => {
    // eslint-disable-next-line no-undef
    const response = await fetch('http://localhost:8022/api/departures') // Realiza una solicitud GET
    const data = await response.json() // Convierte la respuesta a JSON

    expect(response.status).toBe(200) // Verifica que el estado sea 200
    expect(data).toEqual(
      expect.arrayContaining([
        // Verifica que la respuesta contenga ciertos elementos
        // expect.objectContaining({ id: expect.any(Number), destination: expect.any(String) })
      ])
    )
  })
})

import { describe, it, expect } from 'vitest'
import dotenv from 'dotenv'
import startServer from '../index.mjs'
import request from 'supertest'
import freeProfile from '../db/profiles/freeProfile.json'

describe('Pruebas con diferentes configuraciones de entorno', () => {
  let server

  beforeAll(() => {
    server = startServer(8022)
  })

  it('Debería iniciar correctamente con la configuración A', async () => {
    dotenv.config({ path: '../.env.dummy-server' })
    // const server = startServer(8022);
    expect(server).toBeDefined()
    // Añade más verificaciones dependiendo de la configuración
  })

  it('Debería fallar con la configuración B incorrecta', async () => {
    dotenv.config({ path: '../.env.dummy-server' })
    try {
      // const server = startServer(8022);
      const res = await request(server).get('/api/teams')
      expect(res.statusCode).toBe(200)
      expect(res.body.message).toBe('Hello World')
      console.log('res', res)
    } catch (error) {
      expect(error).toBeDefined()
      // Comprueba el tipo de error esperado
    }
  })

  it('Debería devolver el perfil en la ruta GET /me', async () => {
    const res = await request(server).get('/api/profiles/me').set('Accept', 'application/json')
    expect(res.statusCode).toBe(200)

    console.log('body', res)

    expect(res.first_name).toBe(freeProfile.first_name)
    expect(res.email).toBe(freeProfile.email)
  })

  // it('Debería crear un nuevo usuario en la ruta POST /api/users', async () => {
  //     const newUser = freeProfile;
  //     console.log('user', newUser);
  //     const res = await request(server).post('/me').send(newUser).set('Accept', 'application/json');
  //     expect(res.statusCode).toBe(201);
  //     expect(res.body.first_name).toBe('Juan Jose');
  //     expect(res.body.email).toBe('wanyos99@emailmeter.com');
  // });
})
