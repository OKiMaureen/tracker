import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/index'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import ViewSong from '@/components/ViewSong'

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
    },
    // route to songs path
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    // route to songs/create path
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    // route to songs/songId path
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    // route to songs/songId/edit path
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    }
  ]
})
