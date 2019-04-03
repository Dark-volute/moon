import Vue from 'vue'
import App from './App.vue'

import './components/theme-chalk/index.scss'

import Row from './components/row/row.js';
import Col from './components/col/col.js';
import Comfirm from './components/confirm/confirm.js';
import Alert from './components/message/message.js';
import Toast from './components/toast/toast.js';
import router from './router'

/* istanbul ignore next */

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


