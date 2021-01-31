// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/reset.scss'
import '@/assets/css/common.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import tool from '@/assets/js/tool'
import VueClipboard from 'vue-clipboard2'
Vue.use(tool)
Vue.use(VueClipboard)
import {
  Toast,
  Button,
  Swipe,
  SwipeItem,
  NavBar,
  Field,
  Form,
  Popup,
  Tab,
  Tabs,
  Uploader,
  CountDown,
  List,
  Checkbox,
  CheckboxGroup
} from 'vant'

Vue.use(Toast);
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Form);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Uploader);
Vue.use(CountDown);
Vue.use(List);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

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
