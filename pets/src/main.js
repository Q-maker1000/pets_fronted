// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import $ from 'jquery' 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import bootstrapIcon from 'bootstrap-icons'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'element-ui/lib/theme-chalk/index.css'; 
import SearchInput from '@/components/SearchInput.vue';

// import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(Element)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(bootstrapIcon)

// 全局注册 $
Vue.prototype.$ = $
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$axios = axios



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
