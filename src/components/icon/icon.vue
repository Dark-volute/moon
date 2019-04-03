<template>
  <svg class="m-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
  import '../svg'
  export default {
    name: 'Icon',
    props: ['name']
  }
</script>
<style lang="scss" scoped>
  .m-icon {width: 1em; height: 1em; color:red}
</style>
