<template>
    <div class="cascader-item">
        <div class="left">
            <div v-for="(item,index) in source" :key='index'>
                <div @click="select(item)" class="item" :class='{"arrow-right": item && item.children}'>
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>

        <div v-if="rightItems" class='right'>
            <cascader-items 
            :source="rightItems" 
            :level='level+1' 
            :selected='selected' 
            @update:selected='onUpdateSelected'></cascader-items>
        </div>
    </div>
</template>

<script>
export default {
  name: 'cascaderItems',
  data() {
    return {}
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    source: {
      type: Array
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
      } else {
        return null
      }
    }
  },
  methods: {
    select(item) {
      let copy = this.selected.slice()
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(copy) {
      this.$emit('update:selected', copy)
    }
  }
}
</script>

<style  lang='scss'>
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    height: 200px;
    overflow: scroll;
    min-width: 140px;
    .item {
      position: relative;
      padding: 10px;
      &:hover {
        background: #eee;
      }
      &.arrow-right:after {
        font-family: element-icons;
        content: '>';
        font-size: 14px;
        color: #bfcbd9;
        position: absolute;
        right: 15px;
      }
    }
  }
  .right {
    border-left: 1px solid #ccc;
  }
}
</style>
