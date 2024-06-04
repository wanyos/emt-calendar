import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useUserInfo = defineStore('useUserInfo', () => {
  const email = ref('')
  const password = ref('')
  const user = reactive({
    id: undefined,
    name: undefined
  })

  const isLogin = computed(() => user.id !== undefined && user.name !== undefined )

  const setSignUp = (email, password) => {
    const auth = getAuth()
   
    createUserWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {
      const user = userCredential.user
      console.log('user', user)
    }).catch((error) => {
      console.log('error')
    })
  }

  const setSignIn = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value).then((userCredential) => {
      const usr = userCredential.user
      user.id = usr.uid
      user.name = usr.email
    }).catch((error) => {
      console.log('error', error)
    })
  }

  const setSignOut = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      user.id = undefined
       user.name = undefined
    }).catch((err) => {
      console.log(err)
    })
  }

  const setUserInfo = (id, name) => {
    user.id = id
    user.name = name
  }

  

  return { user, setUserInfo, setSignOut, setSignUp, setSignIn, isLogin }
})
