<template>
    <div>
        <m-cascader :source='source' :selected.sync='selected'></m-cascader>
    </div>
</template>

<script>
    import mCascader from '../../../src/components/cascader/cascader.vue'

    export default {
        components: {mCascader},
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
        }
    }
</script>

<style lang='scss'>

</style>
