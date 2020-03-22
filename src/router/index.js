import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bingo from '../views/Bingo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card/:type',
    name: 'BingoCard',
    component: Bingo,
    meta: {
      browserTitle: 'STL Bingo!'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
