import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCG3mdn_AtOWQLcGvEML61Ua6jsWjUIRpg",
    authDomain: "fir-login-4f13b.firebaseapp.com",
    projectId: "fir-login-4f13b",
    storageBucket: "fir-login-4f13b.appspot.com",
    messagingSenderId: "223212964810",
    appId: "1:223212964810:web:3aca0f7f699d9aa637dd33"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
