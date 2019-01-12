<template>
  <div>
    <el-row>
      <el-col :span="5">
        <div class="inputs">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-row>location</el-row>
            <el-row class="mt-10">
                <el-col :span="12">
                  <el-form-item  label="country" required>
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col class="pl-10" :span="12">
                  <el-form-item label="city" required>
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item  label="longitude" required>
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col class="pl-10" :span="12">
                  <el-form-item label="latitude" required>
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            <el-form-item label="Water require ( m³/day)" required>
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Head H (m)" required>
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Pipe length L (m)" required>
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
      <el-col :span='19'>
        <div class="right-content">
          <!-- 表格 -->
          <el-table
            border
            :data="tableData"
            class="table"
            stripe
            style="width: 100%;"
          >
            <el-table-column
              prop="userName"
              align="center"
              label="Pump Model"
            ></el-table-column>
            <el-table-column
              prop="password"
              align="center"
              label="Solar Panel/Pwoer"
              width="155"
            ></el-table-column>
            <el-table-column
              prop="phone"
              align="center"
              label="Accessories"
            ></el-table-column>
            <el-table-column
              prop="email"
              align="center"
              label="Cable"
            ></el-table-column>
            <el-table-column
              prop="address"
              align="center"
              label="H(m)"
            ></el-table-column>
            <el-table-column
              prop="userType"
              align="center"
              label="Q(m³/h)"
            ></el-table-column>
            <el-table-column
              align="center"
              label="Output(m³/day)"
              width="122px;"
            />
            <el-table-column
              align="center"
              label="Hmax(m)"
            />
            <el-table-column
              align="center"
              label="Qmax(m³/h)"
            />
          </el-table>
          <div class="imgWrap">
            <img src="../../../assets/pdf-8.jpg">
          </div>
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
      rules: {},
      tableData: []
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
<style lang='scss'>
.inputs {
  border: 1px solid #e0e0e0;
  padding: 20px;
  // background: #666666;
  // .el-form-item__label{
  //   color:#fff;
  // }
}
.inputs .el-input__suffix {
  top: 15px !important;
}
.inputs .el-select {
  display: block !important;
}
.right-content {
  padding-left: 20px;
}
</style>
