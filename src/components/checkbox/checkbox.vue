<template>
    <label>
        <input
                v-if='group'
                type="checkbox"
                :disabled="disabled"
                :value="label"
                v-model='model'
                @change="change"/>

        <input
                v-else
                type="checkbox"
                :disabled="disabled"
                :checked="currentValue"
                @change="change"/>


        <span :class='[
    "checkbox-text",
    {
        "is-checked":currentValue
    }]'><slot></slot></span>
    </label>
</template>
<script>
    import Emitter from '../mixins/emitter.js';

    export default {
        name: 'mCheckbox',
        mixins: [Emitter],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            label: {
                type: [String, Number, Boolean],
                default: false
            },
        },
        data() {
            return {
                currentValue: this.value,
                group: false,
                model: []
            };
        },
        mounted() {
            this.group = this.$parent.$options.name === 'mCheckboxGroup'

            if (this.group) {
                this.$parent.updateModel(true);
            } else {
                this.updateModel();
            }
        },
        methods: {
            updateModel() {
                this.currentValue = this.value === this.trueValue;
            },
            change(event) {
                if (this.disabled) {
                    return false;
                }
                const checked = event.target.checked;
                this.currentValue = checked;

                this.$emit('input', checked);
                if (this.group) {
                    this.$parent.change(this.model);
                } else {
                    this.$emit('change', checked);
                    this.dispatch('mFormItem', 'on-form-change', checked);
                }

            }
        }
    }
</script>

<style lang='scss'>
    .checkbox-text {
        display: inline-block;
        vertical-align: middle;
    }

    .is-checked {
        color: #2d8cf0
    }

    input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        box-sizing: border-box;
        width: 16px !important;
        height: 16px !important;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        vertical-align: top;
        border: 1px solid #dcdee2;
        transition: border .3s;
        border-radius: 2px;
    }

    input[type='checkbox']:checked {
        background: url('./checkbox.svg') no-repeat;
        background-size: cover;
        border: 1px solid #2d8cf0
    }

    input[type='checkbox']:focus {
        outline: none
    }

</style>
