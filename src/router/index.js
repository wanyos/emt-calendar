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
      component: ReportView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: CalendarView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/my-calendar',
      name: 'My Calendar',
      component: MyCalendarView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView,
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
 // eslint-disable-next-line no-undef
 const auth = $cookies.get('usertoken') !== null;
 const needAuth = to.meta.requireAuth;
  if(needAuth && !auth){
    next('/');
  } else {
    next();
  }
})

export default router
