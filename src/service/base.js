import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_URL;
function http (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: baseUrl + '/demo',
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