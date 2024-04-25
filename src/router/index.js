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
      name: 'report',
      component: ReportView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/my_calendar',
      name: 'my_calendar',
      component: MyCalendarView
    }, {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    }
  ]
})

export default router
