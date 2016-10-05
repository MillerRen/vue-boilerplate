import * as api from 'src/api'

export function getAccount (params) {
  return api.get(params)
}
