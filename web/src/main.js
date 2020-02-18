
import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Card from './components/Card.vue'
Vue.component('m-card',Card)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

