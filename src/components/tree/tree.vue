<template>
    <div>
        <tree-node 
        v-for='(item,index) in copyData' 
        :key='index'
        :data='item'
        :default-expanded-keys="defaultExpandedKeys">
        </tree-node>
    </div>
</template>

<script>
import TreeNode from './tree-node.vue'
export default {
    name:'tree',
    components:{TreeNode},
    props:{
        data:{
            type: Array,
            default:[]
        },
        defaultExpandedKeys:{
            type: Array,
            default:()=>{}
        }
    },
    data(){
        return {
          copyData:[],
          isTree:true,
        }
    },
    watch:{
        data(){
            this.copy()
        }
    },
    created(){
         this.copy();
    },
    methods:{
        recursion(data){
            data.forEach(v => {
                if(v.checked) {
                    this.checkedAll.push(v)
                }
                if(v.children){
                this.recursion(v.children)
            }
            });     
        },
       getCheckedNodes(){
           this.checkedAll = []
           this.recursion( this.copyData )
           return this.checkedAll
       },
       copy(){
           this.copyData = JSON.parse(JSON.stringify(this.data))
       }
    }

}
</script>

<style>

</style>
