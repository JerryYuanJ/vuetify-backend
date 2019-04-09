const { mock } = require("mockjs");
const { genName, genCity } = require('./helper')

const user = mock({
  "person": {
    name: genName(),
    age: /\d{2}/,
    major: /(java)|(js)|(ai)|(python)|(html)/,
    address: genCity(true)
  }
})

module.exports = {
  user: user
}