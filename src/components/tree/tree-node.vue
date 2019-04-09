<template>

    <div class='tree-ul' >
        <span @click='handleExtend(data)' class='expand'>
          <span 
          v-if='data.children && data.children.length' 
          :class='["expand",{"is-expand": data.expand}]'>
          <m-icon name='youjiantou'></m-icon>
          </span>
        </span>
        <input type='checkbox'
               :disabled='data.disabled'   
               v-model="data.checked"
               @input="handleCheck"/>
        <span class='title'>{{data.title}}</span>
         <collapse-transition>
         <div v-show='data.expand'>
        <tree-node    
        :default-expanded-keys="defaultExpandedKeys"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item">
        </tree-node>
        </div>
          </collapse-transition>
    </div>
   
</template>

<script>
 import mIcon from '../icon/icon.vue'
import CollapseTransition from './transition.js'
export default {
  name: 'treeNode',
  components: { CollapseTransition ,mIcon},
  props: {
    data: {
      type: Object
    },
    defaultExpandedKeys: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tree: null
    }
  },
  created() {
    const parent = this.$parent
    if (parent.isTree) {
      this.tree = parent
    } else {
      this.tree = parent.tree
    }
  },
  watch: {
    'data.children': {
      handler(data) {
        if (data) {
          const checkedAll = !data.some(item => !item.checked)
          this.$set(this.data, 'checked', checkedAll)
        }
      },
      deep: true
    }
  },
  computed: {},
  methods: {
    handleExtend(data) {
      this.$set(this.data, 'expand', !this.data.expand)

      const copy = this.defaultExpandedKeys.slice()
      //   const index = copy.indexOf(data.id)
      //   if (index > -1) {
      //     copy.splice(index, 1)
      //   } else {
      //     copy.push(data.id)
      //   }
      //   this.tree.$emit('update:defaultExpandedKeys', copy)
    },
    handleCheck(e) {
      var checked = e.target.checked
      this.updateTreeDown(this.data, checked)
      this.tree.$emit('change:checked', this.data, this)
    },
    updateTreeDown(data, checked) {
      this.$set(data, 'checked', checked)
      if (data.children && data.children.length) {
        data.children.forEach(item => {
          this.updateTreeDown(item, checked)
        })
      }
    }
  }
}
</script>

<style lang='scss'>
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
}
.expand{
    
}
.is-expand{
    transform: rotate(90deg)
}

.tree-ul {
  padding-left: 15px;
  .expand {
    transition: .3s ease-in-out;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 16px;
    cursor: pointer;
  }
}
</style>
