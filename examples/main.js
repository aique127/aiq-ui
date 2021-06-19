import Vue from 'vue'
import App from './App.vue'
import Aiq from '../packages'

// 注册组件库
Vue.use(Aiq);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
