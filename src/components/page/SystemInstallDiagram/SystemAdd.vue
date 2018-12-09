<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog title="add" :visible.sync="editVisible" center>
      <el-form :model="userform" label-width="120px" size="small">
        <el-form-item label="install_type:">
          <el-input v-model="userform.installType"></el-input>
        </el-form-item>
        <el-form-item label="install_picture:">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="explain:">
          <el-input v-model="userform.explainRemark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="saveEdit" type="primary">confirm</el-button>
        <el-button @click="cancel">cancel</el-button>
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
    // userform: {
    //   type: Object,
    //   default: {}
    // },
    items: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      imageUrl: '',
      userform: {
        type: Object,
        default: {}
      }
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    saveEdit() { },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
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
