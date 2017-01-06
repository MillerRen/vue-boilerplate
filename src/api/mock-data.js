import Vue from 'vue'
import {API_ROOT} from 'src/config/constants'

import me from './data/me.json'
import auth from './data/auth.json'

const data = {
  '/users/me': me,
  '/auth/local': auth
}

Vue.http.interceptors.push((request, next) => {
  var url = request.getUrl()
  var key = url.replace(API_ROOT, '')
  console.log('request:', url, data[key])
  next(request.respondWith(data[key], {
    status: data[key] ? 200 : 500,
    ok: !!data[key]
  }))
})
