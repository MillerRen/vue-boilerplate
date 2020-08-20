import router from './router'
import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = []

const r = require.context('./router/routes', false, /.ts$/)

r.keys().forEach(key => {
  routes.push(r(key).default)
})

router.addRoutes(routes)
