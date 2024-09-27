import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiArrowLeft,
  PrAngleDoubleLeft,
  MdCalendarmonthTwotone,
  LaCalendarDaySolid,
  RiSettings5Line,
  SiAffinityphoto,
  PrCircleOn
} from 'oh-vue-icons/icons'

addIcons(
  BiArrowLeft,
  PrAngleDoubleLeft,
  MdCalendarmonthTwotone,
  LaCalendarDaySolid,
  RiSettings5Line,
  SiAffinityphoto,
  PrCircleOn
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCookies, {
  expires: '1d',
  path: '/'
})
app.component('v-icon', OhVueIcon)

app.mount('#app')
