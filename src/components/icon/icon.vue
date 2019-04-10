<template>
  <svg class="m-icon">
    <use :xlink:href="`#icon-${name}`" :style='{fill}'></use>
  </svg>
</template>
<script>
  import '../svg'
  export default {
    name: 'Icon',
    props: {
      name:{
        type: String,
        required: true,
      },
      fill: {
        type:String
      }
    }
  }
</script>
<style lang="scss" scoped>
  .m-icon {width: 1.2em; height: 1.2em; color:red}
</style>
