<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="report">
          <el-form
            :model="ruleForm"
            ref="ruleForm"
          >
            <el-form-item label="Project">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Customer">
              <el-select v-model="ruleForm.pipe"></el-select>
            </el-form-item>
            <el-form-item label="Note">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="ruleForm.name"
              >
              </el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary">Create report PDF</el-button>
          <el-button
            class="mt-10"
            type="primary"
          >Accessories for selected pump</el-button>
          <el-button
            class="mt-10"
            type="primary"
          >System layout</el-button>
          <el-button
            class="mt-10"
            type="primary"
          >All accessories</el-button>
        </div>
      </el-col>
      <el-col :span="18">

      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        pipe: 'Plastic'
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.report {
  border: 1px solid #e0e0e0;
  padding: 20px;
  background: #ffefd5;
}
.report .el-input__suffix {
  top: 15px !important;
}
.report .el-select {
  display: block !important;
}
.report .el-button {
  width: 100%;
}
.report .el-button + .el-button {
  margin-left: 0;
}
</style>

