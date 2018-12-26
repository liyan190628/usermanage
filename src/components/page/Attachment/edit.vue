<template>
    <!-- 新增/修改模态框 -->
    <el-dialog title="edit" width="100%;" :visible.sync="editVisible" center>
      <el-form class="addform" :model="userform" label-width="120px" size="small">
        <el-form-item label="productname:">
          <el-input v-model="userform.acceName"></el-input>
        </el-form-item>
        <el-form-item label="suitPump:">
          <el-input v-model="userform.suitPump"></el-input>
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
              :http-request="uploadImg"
              :on-success="handleAvatarSuccess">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
import { accessoryServices } from '@/api/accessoryServices'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    userform: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      imageUrl: '', // 图片地址
      st: '',
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
    saveEdit() { },
    // 上传图片
    uploadImg(){

    },
    // 图片上传成功
    handleAvatarSuccess () {

    },
    async confirm () {
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
        acceName: this.userform.acceName,
        suitPump: this.userform.suitPump,
        orderInfos: arr,
        featuress: arr1,
        technicalDatas: arr2,
        dimenWeights: arr3,
        picture: '',
        acceId: this.userform.acceId
      })
      let res = await accessoryServices.postAccessoryEdit(params)
      if (res.flag) {
        this.$emit('cancel')
        this.$message.success('修改成功')
        this.$parent.getTableList()
        this.init()
      } else {
        thiss.$message.error(res.msg)
      }
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
    },
    init () {
      this.userform.acceName = '',
      this.userform.suitPump = ''
      this.pumpEnd =  {
        domains: [{
          value: ''
        }]
      },
      this.fpumpEnd =  {
        domains: [{
          value: ''
        }]
      },
      this.tpumpEnd =  {
        domains: [{
          value: ''
        }]
      },
      this.dpumpEnd =  {
        domains: [{
          value: ''
        }]
      }
    }
  },
  computed: {
    editVisible: {
      get() {
        return this.show
      },
      set(n) {
        this.$emit('cancel', n)
      }
    }
  },
  watch: {
    userform (n) {
      console.log(n)
      n.orderInfos.forEach(v => {
        this.pumpEnd.domains.push({
          value: v,
          key: Date.now()
        })
      })
      n.featuress.forEach(v => {
        this.fpumpEnd.domains.push({
          value: v,
          key: Date.now()
        })
      })
      n.technicalDatas.forEach(v => {
        this.tpumpEnd.domains.push({
          value: v,
          key: Date.now()
        })
      })
      n.dimenWeights.forEach(v => {
        this.dpumpEnd.domains.push({
          value: v,
          key: Date.now()
        })
      })
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
</style>
