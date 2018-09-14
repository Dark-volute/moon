<template>
  <div id="app">
    <!--<m-button :loading='loading' @click='loading = !loading' >按钮</m-button>-->
    <!--<m-button icon='settings'>按钮</m-button>-->
    <!--<m-button icon='settings' icon-position="right" :loading='true'>按钮</m-button>-->
    <button @click="onClickButton">上方弹出</button>
  </div>
</template>



<script>
    import Vue from 'vue'
import mButton from './components/Button.vue'
import './components/svg.js'
import  plugin from '@/components/toast.js'


Vue.use(plugin)

export default {
  name: 'app',
    data () {
        return {
        }
    },
    methods: {
        onClickButton () {
            this.$toast('hi？', {
                position:'middle',
                closeButton: {
                    text: '关闭',
                    callback: () => {
                        console.log('关闭了')
                    }
                }
            })
        }
    },
  mounted(){

  },
  components: {
    mButton,
  }
}
</script>

<style>

</style>
