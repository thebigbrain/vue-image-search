import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './config-router'
import App from './App'

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

// boostrap the app
router.start(App, '#app-container')
