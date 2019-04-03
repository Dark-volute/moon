<template>
    <div>
    <div class='m-confirm' v-show='visible'>
        <div class='m-confirm--container'>
            <div class='header'>
                <span>{{title}}</span>
                <span class='close' @click='handleAction("cancel")'>x</span>
            </div>
            <div class='body'>
                {{message}}
            </div>
            <div class='footer'>
                <button class="cancel" @click='handleAction("cancel")'>取消</button>
                <button class="confirm" @click='handleAction("success")'>确认</button>
            </div>
        </div>
    </div>
        <div class="m-modal" v-show='visible'></div>
    </div>
</template>

<script>

    export default {
        name: 'mConfirm',
        data() {
            return {
                visible: false
            }
        },
        mounted() {
            this.onRouteChange()
            this.localScroll()

        },
        methods: {
            handleAction(type) {
                type === 'success' ? this.success() : this.cancel()
                this.canScroll()
            },
            onRouteChange(){
                const remove = () => {
                    this.handleAction()
                }
                window.addEventListener('hashchange', remove);
                window.addEventListener('popstate', remove);
                window.addEventListener('pagehide', remove);
            },
            localScroll(){
                document.documentElement.style.overflowY = 'hidden'
            },
            canScroll(){
                document.documentElement.style.overflowY = 'scroll';
            }
        },
        beforeDestroy() {
            this.canScroll()
            this.$el.remove()
        },
    }
</script>

<style lang='scss'>

</style>
