// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '@/assets/scss/App.scss'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'font-awesome/scss/font-awesome.scss'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,Axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
