import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    data
  })
}

// 获取验证码
export function code() {
  return request({
    url: '/api/user-service/user/imageCode/:clientToken',
    method: 'GET'
  })
}
