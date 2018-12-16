<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog title="add" :visible.sync="editVisible" center>
      <el-form :model="userform" label-width="120px" size="small">
        <el-form-item label="productname:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="suitPump:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="orderInformation:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="features:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="technicalData:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="dimenWeight:">
          <el-input></el-input>
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
        <el-button @click="saveEdit" type="primary">confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
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
      st: ''
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
</style>
