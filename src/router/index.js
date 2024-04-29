import { createRouter, createWebHistory } from 'vue-router'
import ReportView from '@/views/ReportView.vue'
import CalendarView from '@/views/CalendarView.vue'
import MyCalendarView from '@/views/MyCalendarView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Report',
      component: ReportView
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: CalendarView
    },
    {
      path: '/my-calendar',
      name: 'My calendar',
      component: MyCalendarView
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const { setNamePage } = useCurrentPagesStore()
//   const name = to.name
//   setNamePage(name)
//   next()
// })

export default router
