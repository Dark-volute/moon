<template>

    <div>
        <m-upload name="file"
                  action="http://localhost:8888/api/upload1"
                  :on-success="success"
                  :fileList.sync="fileList">
        </m-upload>
    </div>

</template>

<script>
    import mUpload from '../../../src/components/upload/upload.vue'

    export default {
        components: {mUpload},
        data(){
            return {
                fileList:[{name:'avatar.png', url:'http://localhost:8888/avatar.png',status:'success'}]
            }
        },
        methods: {
            success(res) {
                console.log(res)
            }
        }

    }
</script>

<style>

</style>