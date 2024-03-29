import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import SellIndex from '@/components/Sell/SellIndex.vue'
import Sell from '@/components/Sell/Sell.vue'
import SellAddress from '@/components/Sell/SellAddress.vue'
import UploadVoucher from '@/components/Sell/UploadVoucher.vue'
import Orders from '@/components/Orders/Orders.vue'
import OrderDetail from '@/components/Orders/OrderDetail.vue'
import Account from '@/components/Account/Account.vue'
import HelpAndSupport from '@/components/Account/HelpAndSupport.vue'
import Answer from '@/components/Account/Answer.vue'
import AboutUs from '@/components/Account/AboutUs.vue'
import TermOfService from '@/components/Account/TermOfService.vue'
import PrivacyPolicy from '@/components/Account/PrivacyPolicy.vue'
import Tutorial from '@/components/Account/Tutorial.vue'
import Settings from '@/components/Account/Settings.vue'
import Payment from '@/components/Account/Payment.vue'
import AddMethod from '@/components/Account/AddMethod.vue'
import Add from '@/components/Account/Add.vue'
import Invite from '@/components/Account/Invite.vue'
import Login from '@/components/Account/Login.vue'
import Register from '@/components/Account/Register.vue'
import VerificationCode from '@/components/Account/VerificationCode.vue'
import ForgetPwd from '@/components/Account/ForgetPwd.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      navShow: true
    }
  }, {
    path: '/sell',
    name: 'Sell',
    component: Sell
  }, {
    path: '/sellIndex',
    name: 'SellIndex',
    component: SellIndex,
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
    path: '/orderdetail/:id',
    name: 'OrderDetail',
    component: OrderDetail,
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
  }, {
    path: '/selladdress',
    name: 'SellAddress',
    component: SellAddress
  }, {
    path: '/uploadvoucher',
    name: 'UploadVoucher',
    component: UploadVoucher
  }, {
    path: '/helpandsupport',
    name: 'HelpAndSupport',
    component: HelpAndSupport
  }, {
    path: '/answer/:id',
    name: 'Answer',
    component: Answer
  }, {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  }, {
    path: '/termofservice',
    name: 'TermOfService',
    component: TermOfService
  }, {
    path: '/privacypolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }, {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  }, {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }, {
    path: '/payment',
    name: 'Payment',
    component: Payment
  }, {
    path: '/addmethod',
    name: 'AddMethod',
    component: AddMethod
  }, {
    path: '/add',
    name: 'Add',
    component: Add
  }, {
    path: '/invite',
    name: 'Invite',
    component: Invite
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
  }, {
    path: '/verificationcode',
    name: 'VerificationCode',
    component: VerificationCode,
  }, {
    path: '/forgetpwd',
    name: 'ForgetPwd',
    component: ForgetPwd,
  }]
})
