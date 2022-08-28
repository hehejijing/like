
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
// 用户名长度验证
export function validUsernameLength(str) {
  if (str.length < 5 || str.length > 18) {
    return false
  } else {
    return true
  }
}

// 密码长度验证
export function validPasswordLength(str) {
  if (str.length < 5 || str.length > 18) {
    return false
  } else {
    return true
  }
}
