<template>
    <div>
        <m-test-item :source="source"></m-test-item>
    </div>
</template>

<script>
    import mTestItem from './test-item.vue'
    export default {
        name: "test",
        props:['source'],
        components:{
            mTestItem
        }
    }
</script>

<style scoped>

</style>