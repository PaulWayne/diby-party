import Vue from "vue"
import VueRouter from "vue-router"
import Time from './components/Time'
import Thank from './components/Thank'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Time},
  {path: '/finish', component: Thank},
]
export const router = new VueRouter({
  routes
})