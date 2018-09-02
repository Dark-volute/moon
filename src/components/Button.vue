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
  import mIcon from './icon.vue'
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
<style lang="scss" scoped>
  @import "var";
  .m-button { font-size: $font-size; height: $button-height; padding: 0 1em;
    border-radius: $border-radius; border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    &:hover { border-color: $border-color-hover; }
    &:active { background-color: $button-active-bg; }
    &:focus { outline: none; }
    > .m-button-content { order: 2; }
    > .icon { order: 1; margin-right: .2em; }

    &.icon-right {
      > .m-button-content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .2em;}
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>