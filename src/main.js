import Vue from 'vue'
import App from './App.vue'
import Detail from './components/Detail.vue'
import NotFound from './components/NotFound.vue'
import Home from './components/Home.vue'

import { store } from './store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/detail/:index', component: Detail },
  { path: '*', component: NotFound }
]

const router = new VueRouter({ routes })

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')