import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/apicreate',
    component: Layout,
    children: [
      {
        path: '/apicreate',
        name: 'apicreate',
        component: () => import('@/views/apiCreate/apiCreate.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
