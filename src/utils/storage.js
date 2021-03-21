/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 根据name删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 存储token
 */
export const setStoreToken = (data) => {
  window.localStorage.setItem('token', JSON.stringify({
    time: new Date().getTime(),
    data: data
  }))
}

/**
 * 获取token
 */
export const getStoreToken = () => {
  const token = window.localStorage.getItem('token');
  const currentTime = new Date().getTime();
  const expires = 1000 * 60 * 60 * 24 * 7;
  if(token && currentTime - JSON.parse(token).time < expires) {
    return JSON.parse(token).data;
  } else {
    return ''
  }
}

/**
 * 删除token
 */
export const removeStoreToken = () => {
  window.localStorage.removeItem('token')
}
