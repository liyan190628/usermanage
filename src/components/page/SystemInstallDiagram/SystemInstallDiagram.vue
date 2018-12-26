<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'系统安装图管理'"
            :title2="'系统安装图管理'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true"
               :model="formInline"
               class="demo-form-inline mgb10">
        <el-form-item label="install_type:">
          <el-input v-model="formInline.installType"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getTableList()"
                     type="primary">query</el-button>
          <el-button @click="editVisible = true"
                     type="primary">add</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格 -->
      <el-table border
                :data="tableData"
                stripe
                style="width:100%;">
        <el-table-column prop="installType"
                         align="center"
                         label="install_type">
        </el-table-column>
        <el-table-column prop="explainRemark"
                         align="center"
                         label="explain">
        </el-table-column>
        <el-table-column prop="picPath"
                         align="center"
                         label="install_picture">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page.sync="cur_page"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="rows"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="add"
               :visible.sync="editVisible">
      <el-form :model="userform"
               label-width="120px"
               size="small">
        <el-form-item label="install_type:">
          <el-input v-model="userform.installType"></el-input>
        </el-form-item>
        <el-form-item label="install_picture:">
          <el-upload class="avatar-uploader"
                     :action="st"
                     :show-file-list="false"
                     :http-request="uploadImg">
            <img v-if="userform.imageUrl"
                 :src="userform.imageUrl"
                 class="avatar">
            <i v-else
               class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="explain:">
          <el-input v-model="userform.explainRemark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click.native="editVisible = false">cancel</el-button>
        <el-button @click.native="addConfirm"
                   type="primary">confirm</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
// import echarts from 'echarts'
export default {
  data () {
    return {
      formInline: {
        installType: '' // 安装类型
      },
      tableData: [], // 表格数据
      editVisible: false,
      userform: {
        installType: '',
        imageUrl: '',
        explainRemark: ''
      },
      st: '',
      cur_page: 1, // 当前页
      rows: 10,
      total: 10
    }
  },
  methods: {
    getTableList () { // 获取列表数据
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
    addConfirm () {
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
            this.$message("添加成功!")
            this.getTableList()
          } else {
            this.$message.success(res.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        });
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
        .post("/pumpms/upload/picture", formData, config)
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
  },
  created () {
    this.getTableList()
  }
}
</script>
<style scoped>
.row-bg {
  border: 1px solid #ccc;
  padding: 8px 4px;
}
.table {
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
