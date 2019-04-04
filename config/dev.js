const mockData = require('../mock/test.json')
const path = require('path')

module.exports = {
  devServer: {
    port: process.env.PORT,
    before(app){
      apiFactory.call(app, '/test.json', mockData)
      apiFactory.call(app, '/test2.json', mockData)
      apiFactory.call(app, '/test3.json', mockData)
      apiFactory.call(app, '/test4.json', mockData)
    }
  }
}

function apiFactory (path, data) {
  this.get(path, (req, res) => {
    res.json(data)
  })
}