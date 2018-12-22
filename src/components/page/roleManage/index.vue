<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'角色管理'" :title2="'角色列表'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="roleName:">
          <el-input v-model="formInline.roleName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getTableList()" type="primary">query</el-button>
          <el-button @click="addRole()" type="primary">add</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格 -->
      <el-table :data="tableData" :stripe='true' style="width: 100%;">
        <el-table-column prop="roleName" align="center" label="roleName">
        </el-table-column>
        <el-table-column prop="roleDescribe" align="center" label="roleDescribe">
        </el-table-column>
         <el-table-column prop="operation" fixed='right' align="center" label="操作" width="320">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.row)" type="text">编辑</el-button>
            </template>
          </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="cur_page"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="rows"
          layout="sizes, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="operation" :visible.sync="addVisible" center>
      <el-form :model="userform" :rules="rules" ref="userform" label-width="120px" size="small">
        <el-form-item  prop='roleName' label="roleName:">
          <el-input v-model="userform.roleName"></el-input>
        </el-form-item>
        <el-form-item label="roleDescribe:">
          <el-input v-model="userform.roleDescribe"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addVisible = false">cancel</el-button>
        <el-button @click.native="addConfirm" type="primary">confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { roleService } from '@/api/roleService.js'
export default {
  data() {
    return {
      formInline: {
        roleName: ''
      },
      tableData: [], // 表格数据
      addVisible: false,
      userform: {
        roleName: '',
        roleDescribe: ''
      },
      rules: {
        roleName: [{ required: true, message: '请填写用户名', trigger: 'blur' }]
      },
      cur_page: 1, // 当前页
      rows: 10,
      total: 10,
      isEdit: false,
      roleId: ''
    }
  },
  methods: {
    handleSizeChange(val) {
      this.rows = val
      this.getTableList()
    },
    handleCurrentChange (val) {
      this.cur_page = val
      this.getTableList()
    },
    handleEdit (item, id) {
      this.addVisible = true
      this.roleId = item.roleId
      this.isEdit = true
      this.userform = {
        roleName: item.roleName,
        roleDescribe: item.roleDescribe,
      }
    },
    addRole() {
      this.addVisible = true
      this.isEdit = false
      this.userform = {
        roleName: '',
        roleDescribe: ''
      }
    },
    async getTableList() { // 获取列表数据
      let vm = {
        roleName: this.formInline.roleName,
        page: this.cur_page,
        rows: this.rows
      }
      let res = await roleService.getRoleList(vm)
      this.tableData = res.rows
      this.total = res.total
    },
    addConfirm() { 
      let vm = {
        roleName: this.userform.roleName,
        roleDescribe: this.userform.roleDescribe
      }
      this.$refs['userform'].validate((valid) => {
        if (valid) {
          if (this.isEdit) {
            vm.roleId = this.roleId
            this.editConfirm(vm)
          } else {
            this.addRoleConfirm(vm)
          }
        } else {
          return false;
        }
      })
    },
    async addRoleConfirm (vm) {
      let res = await roleService.getAddRoler(vm)
      if (res.flag) {
        this.addVisible = false
        this.$message.success("添加成功")
        this.getTableList()
      } else {
        this.$message.error(res.msg)
      }
    },
    async editConfirm(vm) {
      let res = await roleService.getEditRole(vm)
      if (res.flag) {
        this.addVisible= false
        this.$message.success("编辑成功")
        this.getTableList()
      } else {
        this.$message.error(res.msg)
      }
    }
  },
  mounted() {
    this.getTableList()
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
