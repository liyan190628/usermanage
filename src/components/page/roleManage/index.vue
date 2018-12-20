<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'系统安装图管理'" :title2="'系统安装图管理'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="roleName:">
          <el-input v-model="formInline.roleName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getData()" type="primary">query</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格 -->
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">角色管理</el-col>
        <el-col :span="2">
          <el-button @click="addVisible = true" type="primary">+add</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" class="table" stripe style="width: 100%;">
        <el-table-column prop="roleName" align="center" label="roleName">
        </el-table-column>
        <el-table-column prop="roleDescribe" align="center" label="roleDescribe">
        </el-table-column>
         <el-table-column prop="operation" align="center" label="操作" width="200">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" type="text">编辑</el-button>
              <!-- <el-button @click="handleDelete(scope.row.roleId)" type="text">删除</el-button> -->
            </template>
          </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>

    <!-- <SystemAdd @cancel='cancel' :show='editVisible'></SystemAdd> -->
    <el-dialog title="add" :visible.sync="addVisible" center>
      <el-form :model="userform" label-width="120px" size="small">
        <el-form-item label="roleName:">
          <el-input v-model="userform.roleName"></el-input>
        </el-form-item>
        <el-form-item label="roleDescribe:">
          <el-input v-model="userform.roleDescribe"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addConfirm" type="primary">confirm</el-button>
        <el-button @click="cancel">cancel</el-button>
      </span>
    </el-dialog>

    <!-- 编辑 -->
    <el-dialog title="add" :visible.sync="editVisible" center>
      <el-form :model="editform" label-width="120px" size="small">
        <el-form-item label="roleName:">
          <el-input v-model="editform.roleName"></el-input>
        </el-form-item>
        <el-form-item label="roleDescribe:">
          <el-input v-model="editform.roleDescribe"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editConfirm" type="primary">confirm</el-button>
        <el-button @click="editCancel">cancel</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        roleName: ''
      },
      tableData: [
        {roleName: '测试'}
      ], // 表格数据
      cur_page: 1, // 当前页
      rows: 10,
      addVisible: false,
      editVisible: false,
      userform: {
        roleName: '',
        roleDescribe: ''
      },
      editform: {
        roleName: '',
        roleDescribe: ''
      },
      st: ''
    }
  },
  methods: {
    cancel() { // 关闭弹出框
      this.addVisible = !this.addVisible
    },
    editCancel() {
      this.editVisible = !this.editVisible
    },
    handleEdit (item) {
      this.editVisible = true
      this.editform = {
        roleName: item.roleName,
        roleDescribe: item.roleDescribe,
        roleId: item.roleId
      }
    },
    getData() { // 获取列表数据
      this.$axios
        .get("/pumpms/role/queryList", {
          params: {
           roleName: this.formInline.roleName,
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
    addConfirm() { 
      this.$axios
        .get("/pumpms/role/add", {
          params: {
           roleName: this.userform.roleName,
           roleDescribe: this.userform.roleDescribe
          }
        })
        .then(res => {
          if (res.data.flag) {
            this.addVisible = false
            this.$message("添加成功")
            this.getData()
          } else {
            this.$message.success(res.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        });
    },
    editConfirm() {
      this.$axios
        .get("/pumpms/role/edit", {
          params: this.editform
        })
        .then(res => {
          if (res.data.flag) {
            this.editVisible = false
            this.$message.success("编辑成功")
            this.getData()
          } else {
            this.$message.error(res.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        });
    }
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
</style>
