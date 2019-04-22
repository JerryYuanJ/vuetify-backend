const {employees} = require('../mock/demo')

module.exports = {
  devServer: {
    port: 9999,
    open: true,
    before(app){
      apiFactory.call(app, '/demo/employee', employees)
    }
  }
}

function apiFactory (path, data) {
  this.get(path, (req, res) => {
    res.json(data)
  })
}