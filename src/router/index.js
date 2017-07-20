import Vue from 'vue'
import Router from 'vue-router'
import Creations from '@/components/Creations'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Creations
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
