<template>
    <!-- 新增/修改模态框 -->
    <el-dialog title="Add" width="60%" :visible.sync="addVisible">
      <el-form  class="addform" :model="addForm" :rules="rules" :ref="addForm" label-width="120px" size="small">
        <el-form-item label="productname:" prop="acceName">
          <el-input v-model="addForm.acceName"></el-input>
        </el-form-item>
        <el-form-item label="suitPump:">
          <el-input v-model="addForm.suitPump"></el-input>
        </el-form-item>
        <el-form-item class="addform-1" label="orderInformation:">
            <el-form-item v-for="(domain, index) in pumpEnd.domains" :key="domain.key">
              <el-input v-model="domain.value">
                <i v-if="index" class="el-icon-minus el-input__icon" slot="suffix" @click="pumpEndReduce(index)"></i>
                <i class="el-icon-plus el-input__icon" slot="suffix" @click="pumpEndAdd"></i>
              </el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item class="addform-1" label="features:">
            <el-form-item v-for="(domain, index) in fpumpEnd.domains" :key="domain.key">
              <el-input v-model="domain.value">
                <i v-if="index" class="el-icon-minus el-input__icon" slot="suffix" @click="fpumpEndReduce(index)"></i>
                <i class="el-icon-plus el-input__icon" slot="suffix" @click="fpumpEndAdd"></i>
              </el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item class="addform-1" label="technicalData:">
            <el-form-item v-for="(domain, index) in tpumpEnd.domains" :key="domain.key">
              <el-input v-model="domain.value">
                <i v-if="index" class="el-icon-minus el-input__icon" slot="suffix" @click="tpumpEndReduce(index)"></i>
                <i class="el-icon-plus el-input__icon" slot="suffix" @click="tpumpEndAdd"></i>
              </el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item class="addform-1" label="dimenWeight:">
           <el-form-item v-for="(domain, index) in dpumpEnd.domains" :key="domain.key">
              <el-input v-model="domain.value">
                <i v-if="index" class="el-icon-minus el-input__icon" slot="suffix" @click="dpumpEndReduce(index)"></i>
                <i class="el-icon-plus el-input__icon" slot="suffix" @click="dpumpEndAdd"></i>
              </el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-upload
            class="avatar-uploader"
            :action="st"
            :show-file-list="false"
            :http-request="uploadImg">
            <img v-if="addForm.imageUrl" :src="addForm.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
         
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">cancel</el-button>
        <el-button @click="confirm" type="primary">confirm</el-button>
      </span>
    </el-dialog>
</template>
<script>
import qs from 'qs'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      rules: {
        acceName: [
          { required: true, message: '请输入acceName', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      },
      st: '',
      addForm: {
        acceName: '',
        suitPump: '',
        imageUrl: ''
      },
      pumpEnd: {
        domains: [{
          value: ''
        }]
      },
      fpumpEnd: {
        domains: [{
          value: ''
        }]
      },
      tpumpEnd: {
        domains: [{
          value: ''
        }]
      },
      dpumpEnd: {
        domains: [{
          value: ''
        }]
      },
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    // 上传图片
    uploadImg(item) {
      let formData = new FormData()
      formData.append('picture', item.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
        }
      }
      this.$axios
        .post("/pump/picture", formData,config)
        .then(res => {
          if (res.data.flag) {
            this.$message("上传成功")
            this.addFrom.imageUrl = res.data
          } else {
            this.$message.success(res.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        })
    },
    confirm () {
      let arr = []
      this.pumpEnd.domains.forEach(v => {
        arr.push(v.value)
      })
      let arr1 = []
      this.fpumpEnd.domains.forEach(v => {
        arr1.push(v.value)
      })
      let arr2 = []
      this.tpumpEnd.domains.forEach(v => {
        arr2.push(v.value)
      })
      let arr3 = []
      this.dpumpEnd.domains.forEach(v => {
        arr3.push(v.value)
      })
      let params = qs.stringify({
        acceName: this.addForm.acceName,
        suitPump: this.addForm.suitPump,
        orderInfos: arr,
        featuress: arr1,
        technicalDatas: arr2,
        dimenWeights: arr3,
        picture: ''
      })
      this.$axios({
         method: 'post',
         url:'/pumpms/accessory/add',
         data: params
      }).then((res)=>{
         if (res.data.flag) {
            this.$emit('cancel')
            this.$message.success('添加成功')
            this.$parent.getTableList()
         }
      });
    },
    pumpEndAdd () {
      this.pumpEnd.domains.push({
        value: '',
        key: Date.now()
      })
    },
    fpumpEndAdd () {
      this.fpumpEnd.domains.push({
        value: '',
        key: Date.now()
      })
    },
    tpumpEndAdd () {
      this.tpumpEnd.domains.push({
        value: '',
        key: Date.now()
      })
    },
    dpumpEndAdd () {
      this.dpumpEnd.domains.push({
        value: '',
        key: Date.now()
      })
    },
    pumpEndReduce(index) {
      this.pumpEnd.domains.splice(index, 1)
    },
    fpumpEndReduce(index) {
      this.fpumpEnd.domains.splice(index, 1)
    },
    tpumpEndReduce(index) {
      this.tpumpEnd.domains.splice(index, 1)
    },
    dpumpEndReduce(index) {
      this.dpumpEnd.domains.splice(index, 1)
    }
  },
  computed: {
    addVisible: {
      get() {
        return this.show
      },
      set(n) {
        this.$emit('cancel', n)
      }
    }
  }
}
</script>
<style scoped>
.el-select{
  width: 100%;
}
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
.addform .addform-1{
  margin-bottom: 0;
}
.addform .el-form-item{
  /* margin-bottom: 18px; */
} 
</style>
