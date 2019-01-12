<template>
  <button class='m-button' :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <m-icon class='icon' v-if='icon && !loading' :name='icon'></m-icon>
    <m-icon class='loading icon' v-if='loading' name='loading'></m-icon>
    <div class='m-button-content'>
        <slot></slot>
    </div>
  </button>
</template>
<script>
  import mIcon from '../icon/icon.vue'
  export default {
    props:{
       icon:{},
       loading:{
         type:Boolean,
         default:false
       },
       iconPosition:{
         type:String,
         default:'left',
         validator (value) {
            return !(value !== 'left' && value !== 'right')
         }
       }
    },
     name: 'Button',
     components: {
        mIcon
  }
  }
</script>
<style lang='scss'>

</style>
