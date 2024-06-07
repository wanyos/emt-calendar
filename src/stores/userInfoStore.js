import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import router from '@/router/index.js'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
} from 'firebase/auth'



export const useUserInfo = defineStore('useUserInfo', () => {
  const email = ref('')
  const password = ref('')
  const user = reactive({
    id: undefined,
    name: undefined,
    email: undefined
  })

  const isLogin = computed(() => user.id !== undefined && user.name !== undefined)

  const setSignUp = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const usr = userCredential.user
        user.id = usr.uid
        user.email = usr.email
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  const setSignIn = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const usr = userCredential.user
        user.id = usr.uid
        user.name = usr.email
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  const setSignOut = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        user.id = undefined
        user.name = undefined
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // const setSignInGoogle = async () => {
  //   const auth = getAuth()
  //   const provider = new GoogleAuthProvider()

  //   await signInWithPopup(auth, provider).then((result) => {
  //     user.id = result.user.uid
  //     user.name = result.user.displayName
  //     user.email = result.user.email
  //   })
  // }

  const  setSignInGoogle = async () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
     // provider.addScope('profile');
    // provider.addScope('email');
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly'); // solicitar permisos a oauth

    console.log('route', router.currentRoute.value.name)

    signInWithRedirect(auth, provider)

    console.log('route', router.currentRoute.value.name)

    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        console.log('credential', credential)

        const token = credential.accessToken
        console.log('token', token)
      
        const user = result.user
         console.log('user', user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })

  }

 

  return { user, setSignOut, setSignUp, setSignIn, setSignInGoogle, isLogin }
})
