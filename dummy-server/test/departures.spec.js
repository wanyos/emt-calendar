import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../dummy-server' // Importa tu app Express

describe('GET /api/departures', () => {
  it('should return a list of departures with status 200', async () => {
    const res = await request(app).get('/api/departures')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual(
      expect.arrayContaining([
        // expect.objectContaining({ id: expect.any(Number), name: expect.any(String) })
      ])
    )
  })
})
