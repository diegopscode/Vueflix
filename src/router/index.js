import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/scenes/Home'
import Login from '@/scenes/Login'
import Favorites from '@/scenes/Favorites'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/app',
      name: 'Home',
      component: Home
    },
    {
      path: '/app/favorites',
      name: 'Favorites',
      component: Favorites
    }

  ]
})
