import Vue from 'vue'
import App from './App'
import 'lib-flexible'
import '@/assets/css/index.scss'

// 引入公共JS
import util from '../util/util.js'

// axios
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.prototype.util = util

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
