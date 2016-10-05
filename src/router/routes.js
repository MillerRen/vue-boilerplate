const routes = [
  {
    path: '/',
    component: (resolve) => {
      require(['views/Home'], (Home) => {
        resolve(Home)
      })
    }
  }
]

export default routes
