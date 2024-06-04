import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const useUserInfo = defineStore('useUserInfo', () => {
  const email = ref('')
  const password = ref('')
  const user = reactive({
    id: undefined,
    name: undefined
  })

  const isLogin = computed(() => user.id !== undefined && user.name !== undefined )

  const setNewUser = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {
      console.log('firebase', userCredential)
      const user = userCredential.user
      console.log('user', user)
    }).catch((error) => {
      console.log('error')
    })
  }

  const setLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {
      const usr = userCredential.user
      // console.log('credential', userCredential.user)
      // console.log('user', usr)
      // console.log('uid', usr.uid)

      user.id = usr.uid
      user.name = usr.email
      console.log(user.id)
      console.log(user.name)

    }).catch((error) => {
      console.log('error', error)
    })
  }

  const setUserInfo = (id, name) => {
    user.id = id
    user.name = name
  }

  const deleteUserInfo = () => {
    user.id = undefined
    user.name = undefined
    console.log('delete', user.id)
  }

  return { user, setUserInfo, deleteUserInfo, setNewUser, setLogin, isLogin }
})
