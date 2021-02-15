import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    loading: true,
    address: '',
    payment: {}
  },
  mutations: {
    //es6语法，等同edit:funcion(){...}
    showLoading(state) {
      state.loading = true
    },
    hideLoading(state) {
      state.loading = false
    },
    coverAddress(state, address){
      state.address = address
    },
    coverPayment(state, payment){
      state.payment = payment
    }
  }
})

export default store
