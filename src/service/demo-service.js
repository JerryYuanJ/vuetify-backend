import { get } from './base'

export function getEmployeeList() {
  return get('/test.json')
}