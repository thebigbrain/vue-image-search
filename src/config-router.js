import Home from './components/Search'

function configRouter (router) {
  router.map({
    '/': {
      component: Home
    }
  })
}

export default configRouter
