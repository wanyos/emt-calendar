import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCG3mdn_AtOWQLcGvEML61Ua6jsWjUIRpg',
  authDomain: 'fir-login-4f13b.firebaseapp.com',
  projectId: 'fir-login-4f13b',
  storageBucket: 'fir-login-4f13b.appspot.com',
  messagingSenderId: '223212964810',
  appId: '1:223212964810:web:3aca0f7f699d9aa637dd33'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {
  app,
  auth,
  GoogleAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup
}
