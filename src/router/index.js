import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Sell from '@/components/Sell/Sell.vue'
import Orders from '@/components/Orders/Orders.vue'
import Account from '@/components/Account/Account.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/sell',
      name: 'Sell',
      component: Sell
    }, {
      path: '/orders',
      name: 'Orders',
      component: Orders
    }, {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
