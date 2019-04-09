const { mock } = require("mockjs");

const user = mock({
  "list|1-10": [
    {
      name: /[a-z]{2,10}/,
      age: /\d{2}/,
      major: /(java)|(js)|(ai)|(python)|(html)/,
      score: /d{2}\.\d{2}/
    }
  ]
})

module.exports = {
  user: user
}