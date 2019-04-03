<template>
    <div>
        <m-button>按钮</m-button>
        <m-button icon="loading" icon-position="right" :loading="true">加载中</m-button>
        <m-button :disabled="true">按钮</m-button>
        <div style="margin-top:10px;">
        <m-button type="primary">主要</m-button>
        <m-button type="success">成功</m-button>
        <m-button type="warning">警告</m-button>
        <m-button type="danger">危险</m-button>
        </div>
        <pre><code>{{demo}}</code></pre>

    </div>
</template>


<script>
    import mButton from '../../../src/components/button/button.vue'

    export default {
        components: {mButton},
        data() {
            return {
                demo: `<m-button alert>按钮</m-button>
             <m-button icon="loading" icon-position="right" :loading="true">按钮</m-button>
             <m-button :disabled="true">按钮</m-button>
             <m-button type="primary">主要</m-button>
             <m-button type="success">成功</m-button>
             <m-button type="warning">警告</m-button>
             <m-button type="danger">危险</m-button>`.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>

<style lang='scss'>

    @import '../../../src/components/theme-chalk/index';

</style>

