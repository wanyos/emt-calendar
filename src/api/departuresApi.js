/* eslint-disable no-undef */
import { API_BASE_URL } from './baseApi.js'

export default class DeparturesApi {
  static getAllDepartures = async (token) => {
    try {
       const response = await fetch(`${API_BASE_URL}/api/departures`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

  // static getDeparture = async (query) => {

  // }

  // static insertDeparture = () => {

  // }

  // static deleteDeparture = (id) => {

  // }

  // static updateDeparture = (id, query) => {

  // }
}
