// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Toast,
  Button,
  Swipe,
  SwipeItem,
  NavBar,
  Field,
  Popup
} from 'vant'
import '@/assets/css/reset.scss'
import '@/assets/css/common.scss'
import tool from '@/assets/js/tool'
Vue.use(tool)

Vue.use(Toast);
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Popup);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
