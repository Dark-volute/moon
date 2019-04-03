<template>
    <div class='m-message'>
        <transition name='slide-fade'>
            <div :class="[type ? `m-message--${type}` : '']" class='m-message--main' v-for='(item,index) in notices'
                 :key='index'>
                <m-icon class='m-message--icon' :name='type'></m-icon>
                <span class='m-message--message'>{{item.content}}</span>
            </div>
        </transition>
    </div>
</template>

<script>
    let seed = 0

    function getUuid() {
        return 'alert' + seed++
    }

    import mIcon from '../icon/icon.vue'

    export default {
        components: {mIcon},
        data() {
            return {
                notices: [],
            }
        },
        methods: {
            add(notice) {
                const name = getUuid()
                let _notice = {name: name, ...notice}
                this.notices.push(_notice)

                const duration = notice.duration || 1
                let timer = setTimeout(() => {
                    this.remove(name)
                    clearTimeout(timer)
                }, duration * 3000)
            },

            remove(name) {
                const notices = this.notices

                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].name === name) {
                        this.notices.splice(i, 1)
                        break
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>


