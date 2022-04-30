import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: () => import('../views/MainView.vue'),
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: () => import('../views/home')
      },
      {
        path: '/triangle',
        name: 'TriangleView',
        component: () => import('../views/triangle')
      },
      {
        path: '/calendar',
        name: 'CalendarView',
        component: () => import('../views/calendar')
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
