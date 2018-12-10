<template>
    <div id="m-pagination">
        <button type="button" class="btn-pre" @click="pre" :disabled="internalCurrentPage <= 1"><</button>
        <ul class="m-pager" v-if="total">
            <li v-for="index in total"
                :class="{currentActive: internalCurrentPage === index}"
                @click="currentChange(index)">{{index}}
            </li>
        </ul>
        <button type="button" class="btn-next" @click="next" :disabled="internalCurrentPage >= total">></button>
        <jumper></jumper>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        props: {
            total: {
                type: Number,
                default: 5
            },
            currentPage: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                internalCurrentPage: 1,
                jumpWhichPage: ''
            }
        },
        watch: {
            currentPage: {
                immediate: true,
                handler(val) {
                    this.internalCurrentPage = val;
                }
            },
        },
        methods: {
            pre() {
                if (this.internalCurrentPage === 1) return
                this.$emit('pre-click', --this.internalCurrentPage)
            },
            next() {
                let lastIndex = this.total
                if (this.internalCurrentPage === lastIndex) return
                this.$emit('next-click', ++this.internalCurrentPage)
            },
            currentChange(index) {
                this.internalCurrentPage = index
                this.$emit('current-change', index)
            }
        },
        components: {
            jumper: {
                data(){
                    return {
                    }
                },
                watch:{
                    '$parent.internalCurrentPage'(){
                        this.$refs.input.value = this.$parent.internalCurrentPage;
                    }
                },
                methods:{
                    jumpToPage(){
                        let page = parseInt(this.$refs.input.value)
                        this.$parent.internalCurrentPage = page
                        this.$parent.$emit('current-change', page)
                    }
                },
                render() {
                    return (
                        <span class="jumper">前往
                          <input type="number" onBlur={this.jumpToPage}
                          value={this.$parent.internalCurrentPage}
                          ref='input'/>
                          页</span>
                    )
                }
            }
        }
    }
</script>

<style lang="scss">
    li {
        list-style: none;
    }

    #m-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            border: none;
            outline: none;
            background-color: #fff;
            cursor: pointer;
            font-size: 16px;
        }
        .btn-pre {
            padding-right: 12px;
        }
        .m-pager {
            display: flex;
            margin: 0;
            padding: 0;
            .currentActive {
                color: #409eff
            }
            li {
                display: inline-block;
                padding: 0 5px;
                font-weight: bold;
                cursor: pointer;
                &:hover {
                    color: #409eff;
                }
            }
        }
        .btn-next {
            padding-left: 12px;
        }
        .jumper {
            input {
                width: 50px;
                outline: none;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                padding: 4px 0;
                text-align: center;
                &:focus {
                    border-color: #409eff;
                }
            }
        }
    }

</style>