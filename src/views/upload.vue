<template>

<div>
    <m-upload name="file" action="http://localhost:8888/api/upload1" :parseResponse="fn"></m-upload>
</div>
    
</template>

<script>
import mUpload from '../components/upload/upload.vue'
export default {
    components: {mUpload},
    methods:{
        fn(val){
            console.log(val)
        }
    }

}
</script>

<style>

</style>

