import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  // route to register path
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
