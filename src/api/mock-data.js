import Vue from 'vue'

Vue.http.interceptors.push((request, next) => {
  const body = request.body
  request.url === '/api/accounts{/id}'
  ? next(request.respondWith(body, {
    status: '200'
  }))
  : next((response) => {
    return response
  })
})
