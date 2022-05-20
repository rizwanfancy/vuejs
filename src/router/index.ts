import NotFoundComponent from '../views/NotFound/NotFound.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/TodoItem/Todo.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact/Contact.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
