<template>
<div class="input_container">
  <el-form-item
    :label="itemData.labelName"
    :rules="[]">
    <el-input v-model="form[itemData.value]"></el-input>
  </el-form-item>
</div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    itemData: {
      type: Object,
      default: () => {
        return {
          labelName: '',
          value: null
        }
      }
    },
    form: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
