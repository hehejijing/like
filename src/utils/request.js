import axios from 'axios'
import { Message } from 'element-ui'

// import store from '@/store'

const request = axios.create({
  baseURL: 'http://likede2-admin.itheima.net/likede',
  timeout: 5000
})
// 请求拦截器
// request.interceptors.request.use(
//   function(config) {
//     const token = store.state.tokenObj.token
//     if (token) {
//       config.headers.Authorization = 'Bearer ' + token
//     }
//     return config
//   },
//   function(error) {
//     // 对请求错误做些什么
//     return Promise.reject(error)
//   }
// )

request.interceptors.response.use((response) => {
  const { status, statusText, data } = response
  if (status === 200) {
    // Message.success(statusText)
    return data
  } else {
    Message.error(statusText)
    return Promise.reject(new Error(statusText))
  }
}, (err) => {
  return Promise.reject(err)
})

export default request
