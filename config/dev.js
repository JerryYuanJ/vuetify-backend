const {employees} = require('../mock/demo')

module.exports = {
  devServer: {
    port: process.env.PORT,
    before(app){
      apiFactory.call(app, '/demo/test.json', employees)
    }
  }
}

function apiFactory (path, data) {
  this.get(path, (req, res) => {
    res.json(data)
  })
}