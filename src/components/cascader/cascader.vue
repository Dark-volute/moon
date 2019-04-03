<template>
    <div class='m-cascader' v-click-outside='close'>
        <input type='text' v-model='result' @click='toggle'>
        <div class='popover-wrapper' v-if='popoverVisible'>
               <m-cascader-item 
        :source="source" 
        :selected='selected' 
        class='item' 
        @update:selected='onUpdateSelected'>
        </m-cascader-item>

        </div>
    </div>
</template>

<script>
import mCascaderItem from './cascader-item.vue'
import ClickOutside from '../../directives/click-outside.js'


export default {
  name: 'test',
  data(){
      return {
          popoverVisible: false
      }
  },
  props: {
    source: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  directives: {ClickOutside},
  computed: {
      result(){
          let result = this.selected.map(v => v.name)
          result = result.join('/')
          return result
      }
  },
  methods: {
    close() {
        this.popoverVisible = false
    },
    open() {
        this.popoverVisible = true
    },
    toggle() {    
        this.popoverVisible = !this.popoverVisible
    },  
    onUpdateSelected(copy) {
      this.$emit('update:selected', copy)
    }
  },
  components: {
    mCascaderItem
  }
}
</script>

<style scoped lang='scss'>
.m-cascader {
  position: relative;
  .popover-wrapper {
    border: 1px solid #ccc;
    position: absolute;
    top:25px;
    left:0;
  }
}
</style>