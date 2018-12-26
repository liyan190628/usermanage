<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog :showClose='false'
               title="add"
               width="50%"
               :visible.sync="editVisible">
      <el-form class="addform"
               :model="userform"
               label-width="120px"
               size="small">
        <el-form-item label="standarsName:">
          <el-input v-model="userform.stName"></el-input>
        </el-form-item>
        <el-form-item class="addform-1"
                      label="standarsExplain:">
          <el-form-item v-for="(domain, index) in pumpEnd.domains"
                        :key="domain.key">
            <el-input v-model="domain.value">
              <i v-if="index"
                 class="el-icon-minus el-input__icon"
                 slot="suffix"
                 @click="pumpEndReduce(index)"></i>
              <i class="el-icon-plus el-input__icon"
                 slot="suffix"
                 @click="pumpEndAdd"></i>
            </el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item label="standarsPicture:">
          <el-upload class="avatar-uploader"
                     :action="action"
                     :show-file-list="false"
                     :http-request="uploadImg"
                     :on-success="handleAvatarSuccess">
            <img v-if="userform.imageUrl"
                 :src="userform.imageUrl"
                 class="avatar">
            <i v-else
               class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="cancel">cancel</el-button>
        <el-button @click="saveEdit"
                   type="primary">confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { pumpService } from '@/api/pumpService.js'
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
      userform: {
        stName: '',
        imageUrl: '/static/img/bg3.jpg'
      },
      pumpEnd: {
        domains: [{
          value: ''
        }]
      },
      action: ''
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    async saveEdit () {
      let arr = []
      this.pumpEnd.domains.forEach(v => {
        arr.push(v.value)
      })
      let vm = qs.stringify({
        stName: this.userform.stName,
        stExplains: arr,
        stPicPath: this.imageUrl
      })
      this.$axios
        .post("/pumpms/standard/add", vm)
        .then(res => {
          if (res.data.flag) {
            this.$message.success('add success!')
            this.$emit('cancel')
            this.$parent.getTableList()
          } else {
            this.$message.error(res.data.msg)
          }
        })
      // let res = await pumpService.postAdd(vm)
      // console.log(res)
      // if (res.flag) {
      //   this.$message.success('add success!')
      //   this.$emit('cancel')
      //   this.$parent.getTableList()
      // } else {
      //   this.$message.error(res.msg)
      // }
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    pumpEndAdd () {
      this.pumpEnd.domains.push({
        value: '',
        key: Date.now()
      })
    },
    pumpEndReduce (index) {
      this.pumpEnd.domains.splice(index, 1)
    },
    uploadImg (item) {
      let formData = new FormData()
      formData.append('picture', item.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
        }
      }
      this.$axios
        .post("/pumpms/pump/upload", formData, config)
        .then(response => {
          if (response.data.flag) {
            this.$message("上传成功")
            this.userform.imageUrl = response.data
          } else {
            this.$message.success(response.data.msg)
          }
        })
    }
  },
  computed: {
    editVisible: {
      get () {
        return this.show
      },
      set (n) {
        this.$emit('cancel')
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
</style>
