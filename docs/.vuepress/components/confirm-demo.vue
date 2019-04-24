<template>
    <div>
        <m-button @click="open">点击</m-button>
    </div>
</template>

<script>
    import mButton from '../../../src/components/button/button.vue'
    import '../../../src/components/confirm/confirm.js'
    export default {
        name: "confirm-demo",
        components: {mButton},
        methods: {
            open(){
                this.$confirm('haha','hi')
                    .then(() => {  })
                    .catch(() => {  })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../src/components/theme-chalk/index';

</style>