import Vue from 'vue'
import Router from 'vue-router'
import Creations from '@/components/Creations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Creations',
      component: Creations
    }
  ]
})
