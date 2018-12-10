<template>
    <div id="app">
        <!-- <m-button :loading='loading' @click='loading = !loading' >按钮</m-button>
        <m-button icon='settings'>按钮</m-button>
        <m-button icon='settings' icon-position="right" :loading='true'>按钮</m-button> -->
        <m-row justify='space-between' type='flex'>
           <m-col :span='6' style='border:1px solid red'>1</m-col>
           <m-col :span='6' style='border:1px solid red'>2</m-col>
           <m-col :span='6' style='border:1px solid red'>3</m-col> 
        </m-row>
        <span class='hidden-xs-only'>123</span>
    </div>
</template>


<script>
import Vue from 'vue'
import mButton from './components/button/button.vue'

export default {
  name: 'app',
  data() {
    return {
      selected: [],
      source: [
        {
          name: '江苏',
          children: [
            {
              name: '苏州',
              children: [
                {
                  name: '相城区'
                }
              ]
            },
            {
              name: '无锡',
              children: [
                {
                  name: '高新区'
                }
              ]
            }
          ]
        },
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                {
                  name: '新区'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created() {},
  methods: {
    change(index) {
      console.log(index)
    },
    pre(index) {
      console.log(index)
    },
    next(index) {
      console.log(index)
    },
    onClickButton() {
      this.$toast('hi？', {
        position: 'middle',
        autoClose: 1,
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('关闭了')
          }
        }
      })
    }
  },
  mounted() {},
  components: {
    mButton,
  }
}
</script>

<style>
</style>
