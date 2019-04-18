const emptyChecker = function(field) {
  return (val) => {
    return !!val || `${field}不能为空`
  }
}

const emailChecker = function(val) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(val) || "请输入有效的邮箱."
}
/**
 * 校验数据的长度
 * 如果传入只传一个 min，那么这么 min 会被当成长度上限，即 max
 * 传入两个的话，那么正常的作为范围
 * 
 * @param {*} field 字段名称, 用于返回错误信息, 不能为空
 * @param {*} min 最小长度
 * @param {*} max 最大长度
 */
const lengthChecker = function(field, min, max) {
  return val => {
    if (val == undefined) {
      return `${field}不能为空(null或undefined)`
    } else {
      const length = String(val).trim().length
      if (arguments.length == 2) {
        max = min
        min = 0
      } 
      return (length < min || length > max) ? `${field}需要在${min}和${max}之间` : true
    }
  }
}

export {
  emptyChecker,
  emailChecker,
  lengthChecker
}