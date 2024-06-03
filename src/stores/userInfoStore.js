import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const useUserInfo = defineStore('useUserInfo', () => {
  const email = ref('')
  const password = ref('')
  const user = reactive({
    id: '',
    name: ''
  })

  const setNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {
      console.log('firebase', userCredential)
      const user = userCredential.user
      console.log('user', user)
    }).catch((error) => {
      console.log('error')
    })
  }

  const setUserInfo = (id, name) => {
    user.id = id
    user.name = name
  }

  const deleteUserInfo = () => {
    user.id = undefined
    user.name = undefined
  }

  return { user, setUserInfo, deleteUserInfo, setNewUser }
})
