import Vue from 'vue'
import App from './App.vue'

import './components/theme-chalk/index.scss'

import Row from './components/row/row.js';
import Col from './components/col/col.js';

/* istanbul ignore next */
Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};

Vue.use(Row)

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

Vue.use(Col)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


