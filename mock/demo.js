const { mock, Random } = require("mockjs");

const employee = () => mock({
  name: Random.cname(),
  workYear: /\d{1,2}/,
  birthday: Random.date(),
  title: /(技术总监)|(项目经理)|(前端工程师)|(后端工程师)|(运维工程师)/,
  address: Random.city(true),
  gender: Random.cword('男女', 1),
  email: Random.email(),
  contact: /13\d{9}/
})

function genData(fn) {
  const range = Random.natural(4, 12)
  let result = []
  for (let i = 0; i < range; i++) {
    result.push(fn())
  }
  return {
    success: true,
    data: result
  }
}


module.exports = {
  employees: genData(employee)
}