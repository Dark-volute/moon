<template>
    <div class='m-input_wrapper'>
        <input
        class='m-input'  
        :class="{error: validateState === 'error'}"
        :value='currentValue' 
        @input='handleInput' 
        @blur='handleBlur'
        :placeholder='placeholder'/>
    </div>
</template>

<script>
import Emitter from '../mixins/emitter.js'
export default {
  name: 'mInput',
  mixins: [Emitter],

  inject: {
       mFormItem: {
        default: ''
      },
  },

  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: ''
    }
  },
  computed:{
      validateState(){
          return this.mFormItem.validateState
      }
  }, 
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput(e) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input',value)
      this.dispatch('mFormItem', 'on-form-change', value);
    },
    handleBlur () {
        this.dispatch('mFormItem', 'on-form-blur', this.currentValue);
      }  
  }
}
</script>


