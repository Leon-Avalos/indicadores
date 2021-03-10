import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/registro_investigadores',
    name: 'Registro_investigadores',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro_investigadores.vue')
  },
  {
    path: '/registro_espacio',
    name: 'Registro_espacio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro_espacio.vue')
  },
  {
    path: '/registro_integrantes_espacio',
    name: 'Registro_integrantes_espacio',
    component: () => import( '../views/Registro_integrantes_espacio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
