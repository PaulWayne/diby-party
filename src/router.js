import Vue from "vue"
import VueRouter from "vue-router"
import HelloWorld from './components/HelloWorld'
import Time from './components/Time'
import Timeline from './components/Timeline'
import Thank from './components/Thank'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Time},
  {path: '/time', component: Timeline},
  {path: '/hello', component: HelloWorld},
  {path: '/finish', component: Thank},
]
export const router = new VueRouter({
  routes
})