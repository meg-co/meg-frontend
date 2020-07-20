import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from "vue-material";
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// console.log(2, MdButton)
Vue.use(VueMaterial)
// Vue.use(MdContent)
// Vue.use(MdTabs)
// console.log(2, MdInput)
// Vue.use(MdInput)
// Vue.use(MdLabel)
// Vue.use(MdField)
console.log(3)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
