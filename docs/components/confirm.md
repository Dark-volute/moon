# Confirm 确认框

<ClientOnly>
  <confirm-demo/>
</ClientOnly>

```vue
<template>
    <div>
        <m-button @click="open">点击</m-button>
    </div>
</template>

<script>
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

```