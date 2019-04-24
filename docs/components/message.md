# Message 消息提示

<ClientOnly>
  <message-demo/>
</ClientOnly>

```vue
<template>
    <div>
        <m-button @click='open'>成功</m-button>
        <m-button @click='open2'>警告</m-button>
        <m-button @click='open3'>错误</m-button>
    </div>
</template>

<script>
export default {
    methods: {
        open() {
            this.$alert({type: 'success', text:'成功提示'})
        },
        open2() {
            this.$alert({type: 'warning', text:'警告提示'})
        },
        open3() {
            this.$alert({type: 'error', text:'错误提示'})
        },
    }
}
</script>
```