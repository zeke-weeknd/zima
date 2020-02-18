import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http//这里将http加到VUE的原型属性上，就可以在任意地方使用

Vue.mixin({
  methods:{
    getAuthHeaders(){
      return{
        Authorization:`Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
