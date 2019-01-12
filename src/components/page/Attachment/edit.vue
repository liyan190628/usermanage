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
            <i v-if="index" class="el-icon-minus el-input__icon" slot="suffix" @click="deleteDomains(pumpEnd, index)"></i>
            <i class="el-icon-plus el-input__icon" slot="suffix" @click="addDomains(pumpEnd)"></i>
          </el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item class="addform-1" label="features:">
        <el-form-item v-for="(domain, index) in fpumpEnd.domains" :key="domain.key">
          <el-input v-model="domain.value">
            <i v-if="index" class="el-icon-minus el-input__icon" slot="suffix" @click="deleteDomains(fpumpEnd, index)"></i>
            <i class="el-icon-plus el-input__icon" slot="suffix" @click="addDomains(fpumpEnd)"></i>
          </el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item class="addform-1" label="technicalData:">
        <el-form-item v-for="(domain, index) in tpumpEnd.domains" :key="domain.key">
          <el-input v-model="domain.value">
            <i v-if="index" class="el-icon-minus el-input__icon" slot="suffix" @click="deleteDomains(tpumpEnd, index)"></i>
            <i class="el-icon-plus el-input__icon" slot="suffix" @click="addDomains(tpumpEnd)"></i>
          </el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item class="addform-1" label="dimenWeight:">
        <el-form-item v-for="(domain, index) in dpumpEnd.domains" :key="domain.key">
          <el-input v-model="domain.value">
            <i v-if="index" class="el-icon-minus el-input__icon" slot="suffix" @click="deleteDomains(dpumpEnd, index)"></i>
            <i class="el-icon-plus el-input__icon" slot="suffix" @click="addDomains(dpumpEnd)"></i>
          </el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="avatar-uploader"
          :action="st"
          :show-file-list="false"
          :http-request="uploadImg">
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
    acceId: {
      default: null
    }
  },
  data() {
    return {
      st: '',
      imageUrl: '', // 图片地址
      pumpEnd: {
        domains: [{value: ''}]
      },
      fpumpEnd: {
        domains: [{value: ''}]
      },
      tpumpEnd: {
        domains: [{value: ''}]
      },
      dpumpEnd: {
        domains: [{value: ''}]
      },
      userform: {}
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    saveEdit() {},
    // 上传图片
    uploadImg() {},
    async confirm() {
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
      console.log(params)
      let res = await accessoryServices.postAccessoryEdit(params)
      if (res.flag) {
        this.$emit('cancel')
        this.$message.success('修改成功')
        this.$parent.getTableList()
      } else {
        this.$message.error(res.msg)
      }
    },
    addDomains (item) {
      item.domains.push({
        value: ''
      })
    },
    deleteDomains(item, index) {
      item.domains.splice(index, 1)
    },
    async getDetail(acceId) {
      let vm = {
        acceId: acceId
      }
      let res = await accessoryServices.getAccessoryDetail(vm)
      console.log(res)
      this.userform = {
        acceName: res.acceName,
        suitPump: res.suitPump
      }
      if (res.orderInfos) {
        res.orderInfos.forEach(v => {
          this.pumpEnd.domains.push({value: v})
        })
      }
      if (res.featuress) {
        res.featuress.forEach(v => {
          this.fpumpEnd.domains.push({value: v})
        })
      }
      if (res.technicalDatas) {
        res.technicalDatas.forEach(v => {
          this.tpumpEnd.domains.push({value: v})
        })
      }
      if (res.dimenWeights) {
        res.dimenWeights.forEach(v => {
          this.dpumpEnd.domains.push({value: v})
        })
      }
      if (this.pumpEnd.domains.length > 1) {
        this.pumpEnd.domains.splice(0, 1)
      }
      if (this.fpumpEnd.domains.length > 1) {
        this.fpumpEnd.domains.splice(0, 1)
      }
      if (this.tpumpEnd.domains.length > 1) {
        this.tpumpEnd.domains.splice(0, 1)
      }
      if (this.dpumpEnd.domains.length > 1) {
        this.dpumpEnd.domains.splice(0, 1)
      }
    },
    init () {
      this.pumpEnd = {
        domains: [{value: ''}]
      }
      this.fpumpEnd = {
        domains: [{value: ''}]
      }
      this.tpumpEnd = {
        domains: [{value: ''}]
      },
      this.dpumpEnd = {
        domains: [{value: ''}]
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
    acceId(n) {
      this.init()
      if (n) {
        this.getDetail(n)
      }
    }
  }
}
</script>
<style scoped>
.el-select {
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
  border-color: #409eff;
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
.addform .addform-1 {
  margin-bottom: 0;
}
</style>
