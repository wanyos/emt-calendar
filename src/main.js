import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import Emitter from 'tiny-emitter'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCookies, {
    expires: '1d',
    path: '/'
})

// azure config
app.config.globalProperties.$msalInstance = {}
app.config.globalProperties.$emitter = new Emitter()

app.mount('#app')
