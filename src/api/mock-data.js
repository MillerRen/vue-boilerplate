import Vue from 'vue'
import {API_ROOT} from 'src/config/constants'

import me from './data/me.json'

const data = {
  '/accounts/me': me
}

Vue.http.interceptors.push((request, next) => {
  var url = request.getUrl()
  var key = url.replace(API_ROOT, '')
  console.log('request:', url, data[key])
  next(request.respondWith(data[key], {
    status: '200',
    ok: true
  }))
})
