import Vue from 'vue'
import App from './App'
import 'lib-flexible'
import '@/assets/css/index.scss'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
