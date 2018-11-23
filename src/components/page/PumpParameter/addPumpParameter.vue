<template>
  <div class="bg-white p-all">
    <el-row :gutter="20">
      <el-col :span="16">

        <!-- pump model -->
        <el-row class="border bg-white mb-20">
          <el-col class="border-right" :span="12">pump model</el-col>
          <el-col :span="12">
            <el-input></el-input>
          </el-col>
        </el-row>

        <!-- System Overview -->
        <el-row class="border bg-white mb-20 pr-20">
          <el-col class="text-center pb-20 pt-10" :span="24">System Overview</el-col>
          <!-- <el-row v-for="(items, index) in systemItems" :key="index">
            <el-col class="border-right border-top" :span="12">{{items.name}}</el-col>
            <el-col class="border-top" :span="12">
              <el-input>
                <i class="el-icon-lx-move" slot="suffix" @click="handleIconClick(index)"></i>
              </el-input>
            </el-col>
          </el-row> -->
          <el-form :model="userform" label-width="220px">
            <el-form-item v-for="(item, index) in systemItems" :key="index" :label="item.name">
              <el-input v-model="item.code"></el-input>
            </el-form-item>
          </el-form>
        </el-row>

        <!-- Product advantage -->
        <el-row class="border bg-white mb-20">
          <el-col class="text-center pd" :span="24">Product advantage</el-col>
          <el-row class="py pb-10">
            <el-input placeholder="add advantage" suffix-icon="el-icon-lx-add"></el-input>
          </el-row>
        </el-row>

        <!-- Technical Data -->
        <el-row class="border bg-white mb-20">
          <el-col class="text-center pd" :span="24">Technical Data</el-col>
          <!-- <el-col class="text-center border-top pd" :span="24">
            Motor (controller built in)
          </el-col> -->
          <!-- <el-row v-for="(items, k) in technicalItems" :key="k">
            <el-col class="border-right border-top" :class="items.inputs ? 'br' : ''" :span="12">{{items.name}}</el-col>
            <el-col class="border-top" :span="12">
              <div v-if="items.inputs">
                <el-input :class="index > 0 ? 'border-top' : ''" v-for="(i, index) in items.inputs" :key="index">
                  <i class="el-icon-lx-move" slot="suffix" @click="voltageDelete(index, k)"></i>
                </el-input>
              </div>
              <el-input v-else>
                <i class="el-icon-lx-move" slot="suffix" @click="techDelete(k)"></i>
              </el-input>
            </el-col>
          </el-row> -->
          <el-row>
            <el-form :model="userform" label-width="150px">
              <el-form-item label="Motor">
                <el-select v-model="userform.region">
                  <el-option label="全部" value=""></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-row class="py pb-10">
                <el-input placeholder="add advantage" suffix-icon="el-icon-lx-add"></el-input>
              </el-row>
            </el-form>
          </el-row>
        </el-row>

        <!-- Pump End -->
        <el-row class="border bg-white mb-20">
          <el-col class="text-center pd" :span="24"> Pump End</el-col>
          <el-row class="py pb-10">
            <el-input placeholder="add advantage" suffix-icon="el-icon-lx-add"></el-input>
          </el-row>
        </el-row>

        <!-- Standards -->
        <el-row class="authentication border bg-white mb-20">
          <el-col class="text-center pd" :span="24">Standards </el-col>
          <!-- <el-row class="pd pt-10 pb-10">
            <!<el-upload class="upload-demo" drag action="/api/posts/" multiple>
              <div class="el-upload__text">
                <i class="el-icon-lx-add"></i>
                <em>上传认证</em>
              </div>
            </el-upload> -->
          <el-row class="pd py">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="CE"></el-checkbox>
              <el-checkbox label="ATU"></el-checkbox>
              <el-checkbox label="3S"></el-checkbox>
              <el-checkbox label="HE"></el-checkbox>
            </el-checkbox-group>
          </el-row>
          <!-- </el-row> -->
        </el-row>

        <!-- Explain -->
        <el-row class="border bg-white mb-20">
          <el-col class="text-center pd" :span="24">Explain</el-col>
          <el-row class="py pb-10">
            <el-input placeholder="add advantage" suffix-icon="el-icon-lx-add"></el-input>
          </el-row>
        </el-row>

      </el-col>

      <!-- 上传图片 -->
      <el-col :span="8">
        <el-upload class="upload-demo" drag action="/api/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            <em>上传图片</em>
          </div>
          <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      systemItems: [
        { name: 'Flow rate:', code: '' },
        { name: 'Head max:', code: '' },
        { name: 'Recommend Max input Power:', code: '' },
        { name: 'Minimum well diameter:', code: '' },
        { name: 'Pump discharge:', code: '' },
        { name: 'efficiency:', code: '' },
        { name: 'pump type:', code: '' },
        { name: 'pump model:', code: '' },
        { name: 'Flow rate:', code: '' }
      ],
      technicalItems: [
        {          name: 'Voltage',
          code: '',
          inputs: [
            { code: '' },
            { code: '' }
          ]
        },
        {          name: 'Current', code: '',
          inputs: [
            { code: '' },
            { code: '' }
          ]
        },
        { name: 'Motor Efficiency', code: '' },
        { name: 'MPPT Efficiency', code: '' },
        { name: 'Water temp', code: '' },
        { name: 'Insulation class', code: '' },
        { name: 'Enclosure class', code: '' },
        { name: 'Submersion', code: '' },
        { name: 'Required cooling flow', code: '' }
      ],
      userform: {
        name: ''
      }
    }
  },
  methods: {
    // system 删除
    handleIconClick(index) {
      this.systemItems.splice(index, 1)
    },
    // Technical Data 删除
    techDelete(index) {
      this.technicalItems.splice(index, 1)
    },
    voltageDelete(index, k) {
      this.technicalItems.forEach((v, i) => {
        if (i === k) {
          v.inputs.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style>
.border .el-input .el-input__inner{
  /* border-radius: none !important;
  border: none !important;
  outline:none; */
  /* cursor: pointer; */
}
.el-input__prefix, .el-input__suffix{
  /* color: #000; */
}
.authentication .el-upload--text{
  /* color: #000;
  width: 100%;
  height: 20px;
  border: none;
  text-align: center; */
}
.authentication .el-upload-dragger{
  /* width: 100%;
  height: 100%;
  border: none; */
}
</style>
