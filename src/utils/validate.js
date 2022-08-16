// 用户名长度验证
export function validUsernameLength(str) {
  if (str.length < 6 || str.length > 18) {
    return false
  } else {
    return true
  }
}

// 密码长度验证
export function validPasswordLength(str) {
  if (str.length < 6 || str.length > 18) {
    return false
  } else {
    return true
  }
}
