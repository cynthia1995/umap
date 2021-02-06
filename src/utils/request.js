import axios from 'axios'
import {
  Notify
} from 'vant';
import {
  getStore,
  setStore
} from './storage.js'
import router from '../router/index.js'
import Cookies from 'js-cookie'
// 统一请求路径前缀
// const base = '/ccma-server/api'   // 服务器地址/
const base = 'http://47.243.16.119:8080' // 本地///
// 超时设定
axios.defaults.timeout = 15000

axios.interceptors.request.use(config => {
  return config
}, err => {
  Notify('请求超时')
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  const data = response.data

  // 根据返回的code值来做不同的处理(和后端约定)
  // switch (data.code) {
  //   case 401:
  //     // 未登录 清除已登录状态
  //     Cookies.set('userInfo', '')
  //     setStore('token', '')
  //     if (router.history.current.name !== 'login') {
  //       if (data.messages !== null) {
  //         Notify(data.messages)
  //       } else {
  //         Notify('未知错误，请重新登录')
  //       }
  //       router.push('/login')
  //     }
  //     break
  //   case 403:
  //     // 没有权限
  //     if (data.messages !== null) {
  //       Notify(data.messages)
  //     } else {
  //       Notify('未知错误')
  //     }
  //     break
  //   case 500:
  //     // 错误
  //     if (data.messages !== null) {
  //       Notify(data.messages)
  //     } else {
  //       Notify('未知错误')
  //     }
  //     break
  //   default:
  //     return data
  // }

  return data
}, (err) => {
  // 返回状态码不为200时候的错误处理
  Notify(err.toString())
  return Promise.resolve(err)
})

export const getRequest = (url, params) => {
  const token = getStore('token')
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: params,
    headers: {
      'token': token
    }
  })
}

export const postRequest = (url, params) => {
  const token = getStore('token')
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
}

export const putRequest = (url, params) => {
  const token = getStore('token')
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
      'token': token
    }
  })
}

export const deleteRequest = (url, params) => {
  const token = getStore('token')
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    params: params,
    headers: {
      'token': token
    }
  })
}
