import Alert from './message.vue'
import Vue from 'vue'

let instance

let s = 0

function createAlert(opts) {
  instance = new Vue({
    render(h) {
      return h(Alert, {
        props: opts
      })
    }
  }).$mount()

  document.body.appendChild(instance.$el)
  const alert = instance.$children[0]
    alert.type = opts.type || 'success'
    alert.text = opts.text || '请输入提示文字'
    alert.add({
      content:  alert.text
  })
}


Vue.prototype.$alert = createAlert

