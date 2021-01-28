import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Sell from '@/components/Sell/Sell.vue'
import SellAddress from '@/components/Sell/SellAddress.vue'
import Orders from '@/components/Orders/Orders.vue'
import Account from '@/components/Account/Account.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      navShow: true
    }
  }, {
    path: '/sell',
    name: 'Sell',
    component: Sell,
    meta: {
      navShow: true
    }
  }, {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: {
      navShow: true
    }
  }, {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      navShow: true
    }
  }, {
    path: '/selladdress',
    name: 'SellAddress',
    component: SellAddress
  }]
})
