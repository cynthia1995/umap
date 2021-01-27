// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select, Menu, MenuItem } from 'element-ui'
import '@/assets/css/global.css'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
