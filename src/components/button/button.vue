<template>
    <button
            class='m-button'
            :class="[`icon-${iconPosition}`, type ? 'm-button--' + type : '', disabled ? 'm-button--disabled': '']"
            @click="$emit('click')"
            :disabled="disabled">
        <m-icon class='icon' v-if='icon && !loading' :name='icon'></m-icon>
        <m-icon class='loading icon' v-if='loading' name='loading'></m-icon>
        <div class='m-button-content'>
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import mIcon from '../icon/icon.vue'

    export default {
        name: 'mButton',
        props: {
            type: {
                type: String,
                defalut: 'success',
                validator(value) {
                    if (value) {
                        const types = ['primary', 'success', 'warning', 'danger']
                        if(!types.includes(value)) throw new Error('type is not exist')
                    }
                    return value
                }
            },
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right')
                }
            },
        },
        components: {
            mIcon
        }
    }
</script>
<style lang='scss'>


</style>
