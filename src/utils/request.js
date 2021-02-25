import Vue from 'vue'
import axios from 'axios'
import {
  Notify
} from 'vant';
import router from '../router/index.js'
import Cookies from 'js-cookie'
import store from '../store/index.js'

// 统一请求路径前缀
// const base = '/ccma-server/api'   // 服务器地址/
const base = 'http://114.215.179.110:8080' // 本地///
// 超时设定
axios.defaults.timeout = 15000

axios.interceptors.request.use(config => {
  store.commit('showLoading')
  return config
}, err => {
  Notify('request timeout')
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  store.commit('hideLoading')
  const data = response.data

  switch (data.code) {
    case 401:
      // 未登录 清除已登录状态
      Cookies.set('token', '')
      if (router.history.current.name !== 'login') {
        if (data.message !== null) {
          Notify(data.message)
        } else {
          Notify('Unknown error, please login again')
        }
        router.push('/login')
      }
      break
    case 403:
      // 没有权限
      if (data.message !== null) {
        Notify(data.message)
      } else {
        Notify('Unknown error')
      }
      break
    case 500:
      // 错误
      if (data.message !== null) {
        Notify(data.message)
      } else {
        Notify('Unknown error')
      }
      break
    default:
      return data
  }
  return data
}, (err) => {
  store.commit('hideLoading')
  // 返回状态码不为200时候的错误处理
  Notify(err.toString())
  return Promise.resolve(err)
})

export const getRequest = (url, params) => {
  const token = Cookies.get('token');
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: params,
    headers: {
      'App-Access-Token': token
    }
  })
}

export const postRequest = (url, params) => {
  const token = Cookies.get('token');
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json',
      'App-Access-Token': token
    }
  })
}

export const putRequest = (url, params) => {
  const token = Cookies.get('token');
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function(data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/json',
      'App-Access-Token': token
    }
  })
}

export const deleteRequest = (url, params) => {
  const token = Cookies.get('token');
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    params: params,
    headers: {
      'App-Access-Token': token
    }
  })
}
