import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


// const Constructor = Vue.extend(Button)
// const button = new Constructor({
//     propsData: {
//         icon:'settings'
//     }
// })
// button.$mount('#test')
