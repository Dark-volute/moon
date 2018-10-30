<template>
    <div id="app">
        <!--<m-button :loading='loading' @click='loading = !loading' >按钮</m-button>-->
        <!--<m-button icon='settings'>按钮</m-button>-->
        <!--<m-button icon='settings' icon-position="right" :loading='true'>按钮</m-button>-->
        <!--<button @click="onClickButton">上方弹出</button>-->
        <m-cascader :source.sync="source" popover-height="200px"
                    :selected.sync="selected" :load-data="loadData"></m-cascader>
    </div>
</template>


<script>
    import Vue from 'vue'
    import mButton from './components/Button.vue'
    import './components/svg.js'
    import plugin from '@/components/toast.js'
    import mCascader from './components/cascader.vue'
    import db from './components/db.js'

    Vue.use(plugin)

    function ajax (parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parent_id == parentId)
                result.forEach(node => {
                    if (db.filter(item => item.parent_id === node.id).length > 0) {
                        node.isLeaf = false
                    }else{
                        node.isLeaf = true
                    }
                })
                success(result)
            }, 1000)
        })
    }

    export default {
        name: 'app',
        data() {
            return {
                selected:[],
                source:[]
            }
        },
        created () {
            ajax(0).then(result => {
                console.log(result)
                this.source = result
            })
        },
        methods: {
            loadData ({id}, updateSource) {
                ajax(id).then(result => {
                    console.log(result)
                    updateSource(result) // 回调:把别人传给我的函数调用一下
                })
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
        mounted() {

        },
        components: {
            mButton,
            mCascader
        }
    }
</script>

<style>

</style>
