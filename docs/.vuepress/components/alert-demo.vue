<template>
<m-button @click='open'>alert</m-button>
</template>


<script>
import mButton from '../../../src/components/button/button.vue'
import '../../../src/components/alert/alert.js'

export default {
    components:{ mButton },
    methods: {
        open() {
            this.$alert()
        }
    }
}
</script>
