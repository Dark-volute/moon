<template>
    <div>
        <m-tree
                ref="tree"
                :data='data'
                @change:checked='checkedChange'></m-tree>

        <m-button @click='getCheckedNodes'>得到选中的接点</m-button>
    </div>
</template>
<script>

    import mTree from '../../../src/components/tree/tree.vue'
    import mButton from '../../../src/components/button/button.vue'

    export default {
        components: {mTree, mButton},
        data() {
            return {
                data: [{
                    id: 1,
                    title: 'node1',
                    children: [{
                        id: 2,
                        title: 'node2',
                        children: [{
                            id: 4,
                            title: 'node31',
                            children: [{
                                id: 10,
                                title: 'node4'
                            }]
                        }, {
                            id: 5,
                            title: 'node3',
                        }, {
                            id: 6,
                            title: 'node3',
                        }]
                    }, {
                        disabled: true,
                        title: 'node2',
                    }, {
                        disabled: true,
                        checked: true,
                        title: 'node2',
                    }, {
                        title: 'node2',
                    }]
                }, {
                    title: 'node1'
                }]
            }

        },
        methods: {
            getCheckedNodes() {
                console.log(this.$refs.tree.getCheckedNodes());
            },
            checkedChange(current, checkedAll, node) {
                console.log(current, checkedAll, node)
            }
        }

    }
</script>

<style>

</style>
