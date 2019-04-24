# Pagination 分页

<ClientOnly>
  <pagination-demo/>
</ClientOnly>

```vue
<template>
    <div>
        <m-pagination :total="100" :currentPage="10"></m-pagination>
    </div>
</template>

<script>
    import mPagination from '../../../src/components/pagination/pagination.vue'
    export default {
        name: "pagination-demo",
        components: {mPagination}
    }
</script>
```