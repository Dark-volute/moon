<template>
<div>
 <m-checkbox v-model='value'>选项</m-checkbox> <span>{{value}}</span>
 <m-checkbox-group v-model='group'>
      <m-checkbox label='选项1'>选项1</m-checkbox>
      <m-checkbox label='选项2'>选项2</m-checkbox>
      <m-checkbox label='选项3'>选项3</m-checkbox>
 </m-checkbox-group>
 {{group}}
</div>
    
</template>

<script>
import mCheckbox from '../../../src/components/checkbox/checkbox.vue'
import mCheckboxGroup from '../../../src/components/checkbox/checkbox-group.vue'
export default {
    components:{mCheckbox,mCheckboxGroup},
    data(){
        return {
            value:false,
            group:[]
        }
    },
}
</script>

<style>

</style>
