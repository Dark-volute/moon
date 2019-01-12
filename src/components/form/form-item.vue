<template>
  <div class='m-form-item'>
     <label v-if="label" class='label' :class="{ 'm-form-item__label-required': isRequired }">{{ label }}</label> 
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="m-form-item__message">{{ validateMessage }}</div> 
    </div>
  </div>
</template>
<script>
import Emitter from '../mixins/emitter.js'
import AsyncValidator from 'async-validator'

export default {
  name: 'mFormItem',
  mixins: [Emitter],
  inject: ['form'],

  provide() {
    return {
      mFormItem: this
    }
  },

  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      isRequired: '',
      validateState: '', // 校验状态
      validateMessage: '' // 校验不通过时的提示信息
    }
  },
  computed: {
    // 从 Form 的 model 中动态得到当前表单组件的数据
    fieldValue() {
      return this.form.model[this.prop]
    }
  },
  mounted() {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('mForm', 'on-form-item-add', this)
      this.initialValue = this.fieldValue;
      this.setRules()
    }
  },
  methods: {
    getRules() {
      let formRules = this.form.rules

      formRules = formRules ? formRules[this.prop] : []

      return [].concat(formRules || [])
    },

    setRules() {
      let rules = this.getRules()
      if (rules.length) {
        rules.every(rule => {
          // 如果当前校验规则中有必填项，则标记出来
          this.isRequired = rule.required
        })
      }
      this.$on('on-form-blur', this.onFieldBlur)
      this.$on('on-form-change', this.onFieldChange)
    },

    getFilteredRule(trigger) {
      const rules = this.getRules()
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      )
    },
    validate(trigger, callback = function() {}) {
      let rules = this.getFilteredRule(trigger)

      if (!rules || rules.length === 0) {
        return true
      }

      // 设置状态为校验中
      this.validateState = 'validating'

      // 以下为 async-validator 库的调用方法
      let descriptor = {}
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      let model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''
        callback(this.validateMessage)
      })
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      this.validate('change')
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''

      this.form.model[this.prop] = this.initialValue
    }
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch('mForm', 'on-form-item-remove', this)
  }
}
</script>
