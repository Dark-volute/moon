<template>
    <div id="m-pagination">
        <button type="button" class="btn-pre" @click="pre" :disabled="internalCurrentPage <= 1"></button>
        <ul class="m-pager" v-if="total">
            <li v-for="index in displayTotal"
                :class="{currentActive: internalCurrentPage === index}"
                @click="currentChange(index)">
               {{index > 0 ? index : '...'}}
            </li>
        </ul>
        <button type="button" class="btn-next" @click="next" :disabled="internalCurrentPage >= total"></button>
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
        computed:{
            displayTotal(){
                const array = Array.from({length: this.total})
                    .map((n,index) => index + 1)
                    .filter(n => {
                        if(n ===1) return true
                        if(n === this.total) return true
                        if(Math.abs(n - this.internalCurrentPage) <= 3) return true
                    })
                    .reduce((prev, n) => {
                        const last = prev[prev.length - 1];
                        return prev.concat(n - last > 1 ? [-1, n] : [n]);
                    }, [])
                return array
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
                if(index === -1) return
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
                        if(!page || page<1 || page > this.$parent.total) page = 1
                        this.$parent.internalCurrentPage = page
                        this.$parent.$emit('current-change', page)
                    }
                },
                render() {
                    return (
                        <span class="jumper">前往
                          <input  type="number" onBlur={this.jumpToPage}
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
            outline: none;
            border: none;
            cursor: pointer;
            font-size: 16px;
            background: #eee;
            height: 28px;
            line-height: 28px;
            border-radius: 4px;
            text-align: center;
        }
        .btn-pre {
            padding-right: 12px;
            &:before{
                content: '<';
            }
        }
        .m-pager {
            display: flex;
            margin: 0;
            padding: 0;
            .currentActive {
                color: #fff;
                background: #409eff;
            }
            li {
                display: inline-block;
                box-sizing: border-box;
                text-align: center;
                border-radius: 4px;
                height: 28px;
                line-height: 28px;
                padding: 0 5px;
                margin: 0 5px;
                font-weight: bold;
                cursor: pointer;
                min-width: 30px;
                background: #eee;
                &:hover {
                    color: #409eff;
                }
            }
        }
        .btn-next {
            padding-left: 12px;
            &:before{
                content: '>'
            }
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