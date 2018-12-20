<template>
  <div class="bg-white p-all">
    <el-row :gutter="20">
      <el-col :span="16">
        <!-- pump model -->
        <el-row type="flex" class="border row-bg mb-20 pd" justify="center">
          <el-col :span="6">pump model</el-col>
        </el-row>

        <!-- System Overview -->
        <el-row class="border bg-white mb-20 pr-20">
          <el-col class="text-center pb-20 pt-10" :span="24">System Overview</el-col>
          <el-form label-width="220px">
            <el-form-item v-for="(item, index) in systemItems" :key="index" :label="item.name">
              <el-input v-model="item.code"></el-input>
            </el-form-item>
          </el-form>
        </el-row>

        <!-- Product advantage -->
        <el-row class="border bg-white mb-20 pt-10">
          <el-row type="flex" class="mb-10 pd" justify="center">
            <el-col :span="6">Product advantage</el-col>
          </el-row>
          <el-row class="py pb-10 mt-10">
            <el-form :model="productAdvantage" ref="productAdvantage">
              <el-form-item v-for="(domain, index) in productAdvantage.domains" :key="domain.key" :prop="'domains.' + index + '.value'">
                <el-input v-model="domain.value"></el-input>
              </el-form-item>
              <el-form-item>
               <el-row type="flex" justify="center">
                <el-col :span="6"><el-button @click="productAdvantageAdd">+add</el-button></el-col>
              </el-row>
              </el-form-item>
            </el-form>
          </el-row>
        </el-row>

        <!-- Technical Data -->
        <el-row class="border bg-white mb-20 pt-10">
          <el-row type="flex" class="mb-10 pd" justify="center">
            <el-col :span="6">Technical Data</el-col>
          </el-row>
          <el-row>
            <el-form :model="userform" label-width="150px">
              <el-form-item label="Motor">
                <el-select v-model="userform.motorId">
                  <el-option v-for="(item, index) in types" :key="index" :label="item.motorName" :value='item.motorId'></el-option>
                  <!-- <el-option label="区域二" value="beijing"></el-option> -->
                </el-select>
              </el-form-item>
              <el-row class="py pb-10">
                <el-form :model="technicalData" ref="technicalData">
                  <el-form-item v-for="(domain, index) in technicalData.domains" :key="domain.key" :prop="'domains.' + index + '.value'">
                    <el-input v-model="domain.value"></el-input>
                  </el-form-item>
                  <el-form-item>
                  <el-row type="flex" justify="center">
                    <el-col :span="6"><el-button @click="technicalDataAdd">+add</el-button></el-col>
                  </el-row>
                 </el-form-item>
                </el-form>
              </el-row>
            </el-form>
          </el-row>
        </el-row>

        <!-- Pump End -->
        <el-row class="border bg-white mb-20 pt-10">
          <el-row type="flex" class="mb-10 pd" justify="center">
            <el-col :span="6">Pump End</el-col>
          </el-row>
          <el-row class="py pb-10">
            <el-form :model="pumpEnd" ref="pumpEnd">
              <el-form-item v-for="(domain, index) in pumpEnd.domains" :key="domain.key" :prop="'domains.' + index + '.value'">
                <el-input v-model="domain.value"></el-input>
                  </el-form-item>
                  <el-form-item>
                  <el-row type="flex" justify="center">
                    <el-col :span="6"><el-button @click="pumpEndAdd">+add</el-button></el-col>
                  </el-row>
                 </el-form-item>
              </el-form>
          </el-row>
        </el-row>

        <!-- Standards -->
        <el-row class="authentication border bg-white mb-20 pt-10">
          <el-row type="flex" class="mb-10 pd" justify="center">
            <el-col :span="6">Standards</el-col>
          </el-row>
          <el-row class="pd py">
            <el-checkbox-group v-model="checkList">
              <el-checkbox v-for="(item, index) in standards" :key="index" :label="item"></el-checkbox>
            </el-checkbox-group>
          </el-row>
          <!-- </el-row> -->
        </el-row>

        <!-- Explain -->
        <el-row class="border bg-white mb-20 pt-10">
          <el-row type="flex" class="mb-10 pd" justify="center">
            <el-col :span="6">Explain</el-col>
          </el-row>
          <el-row class="py pb-10">
            <el-form :model="explain" ref="explain">
                <el-form-item v-for="(domain, index) in explain.domains" :key="domain.key" :prop="'domains.' + index + '.value'">
                    <el-input v-model="domain.value"></el-input>
                  </el-form-item>
                  <el-form-item>
                  <el-row type="flex" justify="center">
                    <el-col :span="6"><el-button @click="explainAdd">+add</el-button></el-col>
                  </el-row>
                 </el-form-item>
                </el-form>
          </el-row>
        </el-row>
   
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <el-button @click="back()">取消</el-button>
            <el-button @click="confirm" type="primary">确定</el-button>
          </el-col>
        </el-row>


      </el-col>
    
      <!-- 上传图片 -->
      <el-col :span="8">
        <el-upload
          class="avatar-uploader"
          :action="st"
          :show-file-list="false"
          :http-request="uploadImg"
          :on-success="handleAvatarSuccess">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-col>
      
    </el-row>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  name: 'pumpEdit',
  data() {
    return {
      systemItems: [
        { name: "pump type:", code: "", value: "pumpType" },
        { name: "pump model:", code: "", value: "pumpModel" },
        { name: "Flow rate:", code: "", value: "flowMax" },
        { name: "Head max:", code: "", value: "headMax" },
        { name: "Recommend Max input Power:", code: "", value: "powerMax" },
        { name: "Minimum well diameter:", code: "", value: "minWellDiameter" },
        { name: "Pump discharge:", code: "", value: "discharge" },
        { name: "efficiency:", code: "", value: "efficiencyMax" }
      ],
      userform: {
        name: ""
      },
      checkList: [],
      productAdvantage: {
        domains: [{
          value: ''
        }]
      },
      technicalData: {
        domains: [{
          value: ''
        }]
      },
      pumpEnd: {
        domains: [{
          value: ''
        }]
      },
      explain: {
        domains: [{
          value: ''
        }]
      },
      imageUrl: '',
      st: '',
      types: [], // motor类型
      standards: [] // 多选框
    };
  },
  methods: {
    uploadImg(item) {
      let formData = new FormData()
      formData.append('picture', item.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
        }
      }
      this.$axios
        .post("/pumpms/pump/upload", formData,config)
        .then(response => {
          if (response.data.flag) {
            this.$message("上传成功")
            this.imageUrl = response.data
          } else {
            this.$message.success(response.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleIconClick(index) {
      this.systemItems.splice(index, 1);
    },
    // 动态添加参数
    productAdvantageAdd (){
      this.addDomain(this.productAdvantage)
    },
    technicalDataAdd() {
      this.addDomain(this.technicalData)
    },
    pumpEndAdd () {
      this.addDomain(this.pumpEnd)
    },
    explainAdd () {
      this.addDomain(this.explain)
    },
    addDomain (item) {
      item.domains.push({
        value: '',
        key: Date.now()
      })
    },
    confirm () {
      let vm = {};
      for (let index of this.systemItems) {
        vm[index.value] = index.code;
      }
      // console.log(vm)
      let arr1 = []
      this.productAdvantage.domains.forEach(v => {
        arr1.push(v.value)
      })
      let arr2 = []
      this.technicalData.domains.forEach(v => {
        arr2.push(v.value)
      })
      let arr3 = []
      this.pumpEnd.domains.forEach(v => {
        arr3.push(v.value)
      })
      let arr4 = []
      this.explain.domains.forEach(v => {
        arr4.push(v.value)
      })
      vm.proAdvantages = arr1
      vm.controRemarks = arr2
      vm.pumpEnds = arr3
      vm.explains = arr4
      vm.motorId = this.userform.name
      vm = qs.stringify(vm)
      this.$axios
        .post("/pumpms/pump/add", vm)
        .then(res => {
          if (res.data.flag) {
            this.$message.success("添加成功!")
            this.$router.go(-1)
          } else {
            this.$message.error(res.data.msg)
          }
        })
    },
    // 获取motor
    getType () {
      this.$axios
        .get("/pumpms/motor/query")
        .then(res => {
           res.data.forEach(v => {
             this.types.push({
               motorName: v.motorName,
               motorId: v.motorId
             })
           })
        })
    },
    getStards() { // 获取checkbox
      this.$axios
        .get("/pumpms/standard/query")
        .then(res => {
          //  console.log(res)
        })
    }
  },
  created() {
    this.getType()
    this.getStards()
  },
};
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
