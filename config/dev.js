const {user} = require('../mock/test.js')

module.exports = {
  devServer: {
    port: process.env.PORT,
    before(app){
      apiFactory.call(app, '/test.json', user)
    }
  }
}

function apiFactory (path, data) {
  this.get(path, (req, res) => {
    res.json(data)
  })
}