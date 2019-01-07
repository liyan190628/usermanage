<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="inputs">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
          >
            <el-form-item
              label="location"
              prop="name"
            >
              <el-input
                placeholder="请选择地址"
                v-model="ruleForm.name"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="Water require ( m³/day)"
              required
            >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item
              label="Head H (m)"
              required
            >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item
              label="Pipe length L (m)"
              required
            >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Pipe diameter D (mm)">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Cable length M（m)">
              <el-input v-model="ruleForm.length"></el-input>
            </el-form-item>
            <el-form-item label="Motor cable (mm²)">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Panel">
              <el-input v-model="ruleForm.panel"></el-input>
            </el-form-item>
            <el-form-item label="Water Temp (℃)">
              <el-input v-model="ruleForm.temp">
                <template slot="append">℃</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Dirt loss">
              <el-input
                max="5"
                min="1"
                v-model="ruleForm.loss"
              >
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Pipe material">
              <el-select v-model="ruleForm.pipe">
                <el-option
                  label="Plastic"
                  value="Plastic"
                ></el-option>
                <el-option
                  label="区域二"
                  value="beijing"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span='18'>
        <div class="imgWrap">
          <img src="../../../assets/pdf-8.jpg">
        </div>
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
        pipe: 'Plastic',
        length: '50m',
        panel: '300W',
        temp: '25',
        loss: '3'
      },
      rules: {}
    }
  },
  methods: {
    submitForm(formName) {},
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.inputs {
  border: 1px solid #e0e0e0;
  padding: 20px;
  background: #ffefd5;
}
.inputs .el-input__suffix {
  top: 15px !important;
}
.inputs .el-select {
  display: block !important;
}
.imgWrap {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>