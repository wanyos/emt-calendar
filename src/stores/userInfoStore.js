/* eslint-disable no-undef */
import { defineStore } from 'pinia'
import { reactive, computed, ref } from 'vue'
import {
  auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup
} from '@/firebase/firebaseConfig'
import User from '@/models/user'

export const useUserInfo = defineStore('useUserInfo', () => {
  const user = reactive(new User())
  const token = ref('')
  const isErrorLogin = ref(false);

  token.value = $cookies.get('usertoken')
  user.id = $cookies.get('userid')
  user.email = $cookies.get('useremail')

  const isLogin = computed(() => token !== null && user.id !== null && user.email !== null)

  const setSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const usr = userCredential.user
        user.id = usr.uid
        user.email = usr.email

        $cookies.set('usertoken', usr.accessToken)
        $cookies.set('userid', user.id)
        $cookies.set('useremail', user.email)
      })
      .catch((error) => {
        isErrorLogin.value = true;
        console.log('error', error)
      })
  }

  const setSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const usr = userCredential.user
        user.id = usr.uid
        user.email = usr.email

        $cookies.set('usertoken', usr.accessToken)
        $cookies.set('userid', user.id)
        $cookies.set('useremail', user.email)
      })
      .catch((error) => {
        isErrorLogin.value = true;
        console.log('error', error)
      })
  }

  const setSignOut = () => {
    signOut(auth)
      .then(() => {
        user.id = null
        user.name = null
        token.value = null
        $cookies.remove('usertoken')
        $cookies.remove('userid')
        $cookies.remove('useremail')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const setSignInGoogle = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account'
    })
    try {
      await signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        user.id = result.user.uid
        user.email = result.user.email

        $cookies.set('usertoken', token)
        $cookies.set('userid', user.id)
        $cookies.set('useremail', user.email)
      })
    } catch (err) {
      isErrorLogin.value = true;
      console.log(err)
    }
  }

  return { user, setSignOut, setSignUp, setSignIn, setSignInGoogle, isLogin, isErrorLogin }
})

