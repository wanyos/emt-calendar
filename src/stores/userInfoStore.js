import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import { auth, createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup } from '@/firebase/firebaseConfig'
import router from '@/router/index.js'
import User from '@/models/user'

import {
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
} from 'firebase/auth'

import { addDocument, getUserData, getDocuments } from '@/firebase/firestoreService'

export const useUserInfo = defineStore('useUserInfo', () => {
  
  
  const user = reactive(new User());

  const isLogin = computed(() => user.id !== undefined && user.email !== undefined)

  const setSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const usr = userCredential.user
        user.id = usr.uid
        user.email = usr.email

        // new user
        addDocument(user.id, { name: 'juanjo', middleName: 'romero', lastName: 'ramos', email: user.email });

      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  const setSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const usr = userCredential.user
        user.id = usr.uid
        user.email = usr.email

        // get user
        getUserData(user.id)
        .then((data) => console.log('data firestore', data) )
        .catch(() => consoel.log('no search...'))

      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  const setSignOut = () => {
    signOut(auth)
      .then(() => {
        user.id = undefined
        user.name = undefined
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
    await signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      user.id = result.user.uid
      user.email = result.user.email

      getUserData(user.id)
      .then((data) => {
       if(data === null){
         addDocument(user.id, { name: 'juanjo', middleName: 'romero', lastName: 'ramos', email: user.email });
       } else {
         console.log('data',data)
         console.log('id', user.id)
       }
      })
      .catch((err) => {
       consoel.log('err', err)
      })

    })

  }


  // const  setSignInGoogle = async () => {
  //   const auth = getAuth()
  //   const provider = new GoogleAuthProvider()
  //    provider.addScope('profile');
  //   provider.addScope('email');
  //   provider.addScope('https://www.googleapis.com/auth/contacts.readonly'); // solicitar permisos a oauth

  //   console.log('route', router.currentRoute.value.name)

  //   signInWithRedirect(auth, provider)

  //   const signWith = () => {
  //     return new Promise((resolve, reject) => {
  //       signInWithRedirect(auth, provider)
  //         .then(() => {
  //           No resolver aquí porque el redireccionamiento aún no ha ocurrido.
  //           console.log('Redireccionando a Google para autenticación...');
  //         })
  //         .catch(reject);
  //     });
  //   };

  
  //   signWith()
  //   .then(() => {
  //     getRedirectResult(auth)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result)
  //       console.log('credential', credential)

  //       const token = credential.accessToken
  //       console.log('token', token)
      
  //       const user = result.user
  //        console.log('user', user)
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       const email = error.customData.email
  //       const credential = GoogleAuthProvider.credentialFromError(error)
  //     })

  //   })
  //   .catch((err) => new Error(`erro en la promesa ${err}`))
  // }

  //  console.log('route', router.currentRoute.value.name)
 

  return { user, setSignOut, setSignUp, setSignIn, setSignInGoogle, isLogin }
})
