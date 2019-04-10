<template>
    <div id="app">
        <!-- <m-button :loading='loading' @click='loading = !loading' >按钮</m-button>
        <m-button icon='settings'>按钮</m-button>
        <m-button icon='settings' icon-position="right" :loading='true'>按钮</m-button> -->
        <!-- <m-row justify='space-between' type='flex'>
           <m-col :span='6' style='border:1px solid red'>1</m-col>
           <m-col :span='6' style='border:1px solid red'>2</m-col>
           <m-col :span='6' style='border:1px solid red'>3</m-col> 
        </m-row>
        <span class='hidden-xs-only'>123</span> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/table">table</router-link>|
      <router-link to="/table-slot">table-slot</router-link>|
      <router-link to="/upload">upload</router-link>
    </div> -->

    <m-cascader :source='source' :selected.sync='selected'></m-cascader>

    <m-tree 
     ref="tree"
    :data='data' 
     @change:checked='checkedChange'></m-tree>

   <button @click='getCheckedNodes'>得到选中的接点</button>



    <router-view/>
    </div>
</template>


<script>

import Vue from 'vue'
import mButton from './components/button/button.vue'
import mCascader from './components/cascader/cascader.vue'
import mTree from './components/tree/tree.vue'
export default {
  name: 'app',
  data() {
    return {
        fileList:[],
      keys:[1,2],
      data:[{
        id:1,
        title:'node1',
        children:[{
          id:2,
          title:'node2',
          children:[{
             id:4,
             title:'node31',
             children:[{
               id:10,
               title:'node4'
             }]
          },{
             id:5,
             title:'node3',
          },{
             id:6,
             title:'node3',
          }]
        },{
          disabled:true,
          title:'node2',
        },{
           disabled:true,
           checked:true,
          title:'node2',
        },{
          title:'node2',
        }]
      },{
        title:'node1'
      }],

      selected:[],
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
     getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
    checkedChange(current,checkedAll,node) {
      console.log(current,checkedAll,node)
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
    mCascader,
    mTree,
      mUpload
  }
}
</script>

<style>
</style>

