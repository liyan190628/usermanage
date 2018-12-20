<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'系统安装图管理'" :title2="'系统安装图管理'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="install_type:">
          <el-input v-model="formInline.installType"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getData()" type="primary">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格 -->
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          系统参数管理
        </el-col>
        <el-col :span="2">
          <el-button @click="editVisible = true" type="primary">+add</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" class="table" stripe style="width: 100%;">
        <el-table-column prop="installType" align="center" label="install_type">
        </el-table-column>
        <el-table-column prop="explainRemark" align="center" label="explain">
        </el-table-column>
        <el-table-column prop="picPath" align="center" label="install_picture">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>

    <!-- <SystemAdd @cancel='cancel' :show='editVisible'></SystemAdd> -->
    <el-dialog title="add" :visible.sync="editVisible" center>
      <el-form :model="userform" label-width="120px" size="small">
        <el-form-item label="install_type:">
          <el-input v-model="userform.installType"></el-input>
        </el-form-item>
        <el-form-item label="install_picture:">
        <el-upload
          class="avatar-uploader"
          :action="st"
          :show-file-list="false"
          :http-request="uploadImg"
          :on-success="handleAvatarSuccess">
          <img v-if="userform.imageUrl" :src="userform.imageUrl" class="avatar">
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
  data() {
    return {
      formInline: {
        installType: '' // 安装类型
      },
      tableData: [], // 表格数据
      cur_page: 1, // 当前页
      rows: 10,
      editVisible: false,
      userform: {
        installType: '',
        imageUrl: '',
        explainRemark: ''
      },
      st: ''
    }
  },
  methods: {
    cancel() { // 关闭弹出框
      this.editVisible = !this.editVisible
    },
    getData() { // 获取列表数据
      this.$axios
        .get("/pumpms/syspic/queryList", {
          params: {
           installType: this.formInline.installType,
           page: this.cur_page,
           rows: this.rows
          }
        })
        .then(response => {
          this.tableData = response.data.rows;
        })
        .catch(error => {
          // console.log(error);
        });
    },
    cancel() {
      this.$emit('cancel')
    },
    saveEdit() { 
      this.$axios
        .get("/pumpms/syspic/add", {
          params: {
           installType: this.userform.installType,
           imageUrl: this.userform.imageUrl,
           explainRemark: this.userform.explainRemark
          }
        })
        .then(res => {
          if (res.data.flag) {
            this.editVisible = false
            this.$message("删除成功")
            this.getData()
          } else {
            this.$message.success(res.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        });
    },
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    uploadImg(item) {
      // console.log(item)
      let formData = new FormData()
      formData.append('picture', item.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
        }
        // withCredentials:true
      }
      this.$axios
        .post("/pump/picture", formData,config)
        .then(res => {
          // console.log(res)
          if (res.data.flag) {
            this.$message("上传成功")
            this.userform.imageUrl = res.data
          } else {
            this.$message.success(res.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        })
    },
  },
  created () {
    this.getData()
  }
}
</script>
<style scoped>
.row-bg{
  border: 1px solid #ccc;
  padding: 8px 4px;
}
.table{
  border: 1px solid #ccc;
  border-top: none;
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
