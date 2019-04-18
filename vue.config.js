const devConfig = require('./config/dev')

module.exports = {
  ...devConfig,
  // if there're too many prod configurations, should refactor them to `/config/prod`
  parallel: true
}