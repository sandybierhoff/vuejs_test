import Vue from 'vue'
import App from './App.vue'
import Detail from './components/Detail.vue'
import NotFound from './components/NotFound.vue'
import Home from './components/Home.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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