import axios from 'axios'

function http (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: '/demo', // TODO should automatically change via envs
      timeout: 20000
    })
    instance(options)
      .then(response => {
        const res = response.data
        // TODO this timeout is for mocking
        setTimeout(resolve, 3000, res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function get(url, params) {
  return http({
    method: 'get',
    url,
    params
  })
}