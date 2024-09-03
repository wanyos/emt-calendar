/* eslint-disable no-undef */
 import { API_BASE_URL } from './baseApi.js'

export default class UsersApi {
  static getAllUsers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
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

//   static getUser = async (query) => {

//   }

//   static insertUser = () => {

//   }

//   static deleteUser = (id) => {

//   }

//   static updateUser = (id, query) => {

//   }
}
