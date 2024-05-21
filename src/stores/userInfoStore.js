import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserInfo = defineStore('useUserInfo', () => {
  const user = reactive({
    id: '',
    name: ''
  })

  const setUserInfo = (id, name) => {
    user.id = id
    user.name = name
  }

  const deleteUserInfo = () => {
    user.id = undefined
    user.name = undefined
  }

  return { user, setUserInfo, deleteUserInfo }
})
