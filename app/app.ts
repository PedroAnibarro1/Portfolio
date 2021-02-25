import Vue from 'nativescript-vue'
import Home from './Home.vue'

// Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production')
Vue.config.silent = true

new Vue({
  render: h => h(Home),
}).$start()
