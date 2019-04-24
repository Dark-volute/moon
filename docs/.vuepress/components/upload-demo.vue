<template>

    <div>
        <m-upload name="file"
                  action="http://localhost:8888/api/upload1"
                  :on-success="success"
                  :on-progress="progress"
                  :fileList.sync="fileList">
            <m-button type='primary'>上传</m-button>
        </m-upload>

        <m-upload name="file"
                  action="http://localhost:8888/api/upload1"
                  :on-success="success"
                  :on-progress="progress"
                  :fileList.sync="fileList">
        </m-upload>
    </div>

</template>

<script>
    import mUpload from '../../../src/components/upload/upload.vue'
    import mButton from '../../../src/components/button/button.vue'

    export default {
        components: {mUpload, mButton},
        data() {
            return {
                fileList: []
            }
        },
        methods: {
            progress(e) {
                if (e.total > 0) {
                    e.percent = e.loaded / e.total * 100;
                }
            },
            success(res) {
                console.log(res)
            }
        }

    }
</script>
