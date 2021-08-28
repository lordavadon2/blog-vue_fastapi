import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/NotFound'
import Register from '../views/Register'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import Profile from '../views/Profile'
import Note from '../views/Note'
import EditNote from '../views/EditNote'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requiresAuth: true}
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {requiresAuth: true}
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: Note,
    meta: {requiresAuth: true},
    props: true
  },
  {
    path: '/note/:id',
    name: 'EditNote',
    component: EditNote,
    meta: {requiresAuth: true},
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
