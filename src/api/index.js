import * as Res from './resources'

if (process.env.NODE_ENV !== 'production') {
  require('./mock-data')
}

export default {
  getAccount (params) {
    return Res.Account.get(params)
  }
}
