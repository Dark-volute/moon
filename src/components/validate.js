const defaultRules = {
  Mobile: /^1[3|5|8]\d{9}$/,
  Mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  required: true
}

const errInfo = {
  Mail: '请填写正确的邮箱格式',
  Mobile: '请填写正确的手机号格式格式',
  required: '必填项'
}



export default {
  install(Vue, options) {
    Vue.directive('validator', {
      bind: function(el, binding, vnode) {
        const vm = vnode.context
        const id = el.name
        let rules = binding.value
        let err = ''
      }
    })

    Vue.directive('errorMsg', {
      bind: function(el, binding, vnode) {
        const arg = binding.arg
        const vm = vnode.context
      }
    })
  }
}
