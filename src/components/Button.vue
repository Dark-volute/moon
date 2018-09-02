<template>
  <button class='g-button'>按钮</button>
</template>
<script>

  export default {
     data(){
       return {}
     },
     created() {
     }
  }
</script>
<style lang="scss" scoped>
  @import "var";
  .g-button { font-size: $font-size; height: $button-height; padding: 0 1em;
    border-radius: $border-radius; border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    &:hover { border-color: $border-color-hover; }
    &:active { background-color: $button-active-bg; }
    &:focus { outline: none; }
    > .g-button-content { order: 2; }
    > .icon { order: 1; margin-right: .1em; }

    &.icon-right {
      > .g-button-content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .1em;}
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>