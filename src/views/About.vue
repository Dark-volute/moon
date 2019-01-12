<template>
  <div>
    <m-form ref='form' :model="formValidate" :rules="ruleValidate">
      <m-form-item label="用户名" prop="name">
        <m-input v-model="formValidate.name"></m-input>
      </m-form-item>
      <m-form-item label="邮箱" prop="mail">
        <m-input v-model="formValidate.mail"></m-input>
      </m-form-item>
    </m-form>
    <m-button icon='loading' @click='submitForm'>提交</m-button>
    <m-button @click='restForm'>重置</m-button>
  </div>
</template>
<script>
import mInput from '../components/input/input.vue'
import mForm from '../components/form/form.vue'
import mFormItem from '../components/form/form-item.vue'
import mButton from '../components/button/button.vue'

export default {
  components: { mForm, mFormItem, mInput,mButton},
  data() {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert('提交成功')
        } else {
          window.alert('表单校验失败')
        }
      })
    },
    restForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>
