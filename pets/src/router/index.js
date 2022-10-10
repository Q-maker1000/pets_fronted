import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/register/register'
import Home from '@/pages/home/home'
import Pets from '@/pages/pets/pets'
import Product from '@/pages/product/product'
import Service from '@/pages/service/service'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
      path: '/pets',
      name: 'Pets',
      component: Pets
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
  ]
})
