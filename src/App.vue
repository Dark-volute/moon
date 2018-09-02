<template>
  <div id="app">
    <m-button :loading='loading' @click='loading = ! loading' >按钮</m-button>
    <m-button icon='settings'>按钮</m-button>
    <m-button icon='settings' icon-position="right" :loading='true'>按钮</m-button>
  </div>
</template>

<script>
import mButton from './components/Button.vue'
import './components/svg.js'

export default {
  name: 'app',
  data(){
    return {
      loading:false
    }
  },
  components: {
    mButton,
  }
}
</script>

<style>

</style>
