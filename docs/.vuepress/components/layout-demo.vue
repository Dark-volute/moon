<template>
    <div>
        <m-row>
            <m-col :span='6' >1</m-col>
            <m-col :span='6' >2</m-col>
            <m-col :span='6' >3</m-col>
            <m-col :span='6' >4</m-col>
        </m-row>
        <m-row type='flex'>
            <m-col :span='4' >1</m-col>
            <m-col :span='20' >2</m-col>
        </m-row>
        <m-row type='flex' justify="center">
            <m-col :span='4' >1</m-col>
            <m-col :span='4' >2</m-col>
        </m-row>
        <m-row  :gutter="16" class="gutter">
            <m-col :span='6' ><div class="gutter-bg">1</div></m-col>
            <m-col :span='6' ><div class="gutter-bg">2</div></m-col>
            <m-col :span='6' ><div class="gutter-bg">3</div></m-col>
            <m-col :span='6' ><div class="gutter-bg">4</div></m-col>
        </m-row>

        <m-row >
            <m-col :span='6' >1</m-col>
            <m-col :span='6' :offset="12">2</m-col>
        </m-row>

        <m-row :gutter="10" class="gutter">
            <m-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="gutter-bg">1</div></m-col>
            <m-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="gutter-bg">2</div></m-col>
            <m-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="gutter-bg">3</div></m-col>
            <m-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="gutter-bg">4</div></m-col>
        </m-row>
    </div>
</template>

<script>
    import mRow from '../../../src/components/row/row.js';
    import mCol from '../../../src/components/col/col.js';

    export default {
        name: "layout-demo",
        components: {mRow, mCol},
    }
</script>

<style  lang="scss">
    .m-row{
        margin-bottom: 5px;
    }
    .m-col ,.gutter-bg{
        padding: 10px 0;
        background: #eee;
        border-radius: 8px;
    }
    .gutter .m-col{
        background: #fff;
    }
</style>