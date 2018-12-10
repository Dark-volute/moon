<template>
    <div class="test-item">

        <div class="left">
            <div v-for="item in source" class="label">
                <div @click="leftItem = item">{{item.name}}</div>
            </div>
        </div>

        <div v-if="rightItems">
            <test-items :source="rightItems"></test-items>
        </div>
    </div>
</template>

<script>
    export default {
        name: "testItems",
        data(){
           return {
               leftItem:null
           }
        },
        props:{
            selected: {
                type: Array,
                default: () => []
            },
            source: {
                type: Array,
            },
            level: {
                type: Number,
                default: 0
            }
        },
        computed: {
            rightItems () {
                if(this.leftItem && this.leftItem.children){
                    return this.leftItem.children
                } else {
                    return null
                }
            },
        },
    }
</script>

<style scoped>
    .test-item{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .label{

    }


</style>