import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  // route to root path
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    // route to register path
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // route to login path
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
