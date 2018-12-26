<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'用户管理'"
            :title2="'用户列表'"></crumbs>
    <el-dialog title="Add"
               :visible.sync="addVisible"
               width="50%"
               center>
      <el-form :model="addItems"
               :rules="rules"
               ref="addItems"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="userName:"
                      prop="userName">
          <el-input v-model="addItems.userName"></el-input>
        </el-form-item>
        <el-form-item label="password:"
                      prop="password">
          <el-input v-model="addItems.password"></el-input>
        </el-form-item>
        <el-form-item label="email:"
                      prop="email">
          <el-input v-model="addItems.email"></el-input>
        </el-form-item>
        <el-form-item label="address:"
                      prop="address">
          <el-input v-model="addItems.address"></el-input>
        </el-form-item>
        <el-form-item label="phone:"
                      prop="phone">
          <el-input v-model="addItems.phone"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click.native="addVisible = false">Cancel</el-button>
        <el-button type="primary"
                   @click.native="confirm">Confirm</el-button>
      </div>
    </el-dialog>
    <!-- 搜索 -->
    <div class="container">
      <el-form :inline="true"
               :model="formInline"
               class="demo-form-inline mgb10">
        <el-form-item label="用户名：">
          <el-input v-model="formInline.userName"></el-input>
        </el-form-item>
        <el-form-item label="状态：">
          <el-select v-model="formInline.isLock">
            <el-option label="全部"
                       value=""></el-option>
            <el-option label="锁定"
                       value="Y"></el-option>
            <el-option label="未锁定"
                       value="N"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="getTableList">query</el-button>
          <el-button type="primary"
                     @click="addUser"> add </el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table border
                :data="tableData"
                class="table"
                stripe
                style="width: 100%;">
        <el-table-column width="120"
                         prop="userName"
                         align="center"
                         label="用户名"></el-table-column>
        <el-table-column width="120"
                         prop="password"
                         align="center"
                         label="密码"></el-table-column>
        <el-table-column width="120"
                         prop="phone"
                         align="center"
                         label="联系方式"></el-table-column>
        <el-table-column width="120"
                         prop="email"
                         align="center"
                         label="邮箱"></el-table-column>
        <el-table-column width="120"
                         prop="address"
                         align="center"
                         label="地址"></el-table-column>
        <el-table-column width="120"
                         prop="userType"
                         align="center"
                         label="权限"></el-table-column>
        <el-table-column width="120"
                         align="center"
                         label="当前状态">
          <template slot-scope="scope">
            <span :class="scope.row.isLock === 'N' ? 'text-success' : 'text-danger'">
              {{scope.row.isLock === 'N' ? '未锁定' : '锁定'}}
            </span>
          </template>
        </el-table-column>
        <el-table-column fixed="right"
                         prop="operation"
                         align="center"
                         label="操作"
                         width="200">
          <template slot-scope="scope">
            <el-button @click="editUser(scope.row.userId)"
                       type="text">编辑</el-button>
            <el-button @click="lockOperation(scope.row.userId, scope.row.isLock)"
                       type="text">
              {{scope.row.isLock === 'N' ? '锁定' : '解锁'}}
            </el-button>
            <el-button @click="handleAuthor(scope.row.userId)"
                       type="text">授权</el-button>
            <el-button @click="handleDelete(scope.row.userId)"
                       type="text">删除</el-button>
          </template>
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

    <el-dialog title="Auth"
               :visible.sync="authorVisible"
               width="30%"
               center>
      <el-form label-width="80px"
               class="demo-ruleForm">
        <el-form-item label="role:">
          <el-select v-model="queryRoles.roleId">
            <el-option v-for="(item, index) in userRoles"
                       :key="index"
                       :label="item.roleName"
                       :value="item.roleId"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="authorVisible = false">Cancel</el-button>
        <el-button type="primary"
                   @click="AuthorSave">Confirm</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import { userService } from '@/api/userService.js'
import { roleService } from '@/api/roleService'
export default {
  data () {
    return {
      formInline: {
        userName: "",
        userType: "",
        isLock: ""
      },
      tableData: [],
      addVisible: false, // 添加
      authorVisible: false, // 授权
      userform: {},
      cur_page: 1, // 当前页
      rows: 10,
      total: 10,
      userId: '',
      rules: {
        userName: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
      },
      addItems: {
        userName: '',
        password: '',
        email: '',
        address: '',
        phone: ''
      },
      isEdit: false,
      userRoles: [], // 用户权限
      queryRoles: {
        roleId: ''
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.rows = val
      this.getTableList()
    },
    handleCurrentChange (val) {
      this.cur_page = val
      this.getTableList()
    },
    handleDelete (id) { // 删除用户
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.userDelete(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    async userDelete (id) {
      let vm = {
        userId: id
      }
      let res = await userService.getDelete(vm)
      if (res.flag) {
        this.delVisible = false
        this.$message.success("删除成功")
        this.getTableList()
      } else {
        this.$message.success(res.msg)
      }
    },
    async handleAuthor (id) { // 获取授权
      this.authorVisible = true
      this.userId = id
      let res = await roleService.getQueryRoles({})
      this.userRoles = res
    },
    authorCancel () {
      this.authorVisible = !this.authorVisible;
    },
    lockOperation (id, status) {
      if (status === 'N') {
        this.lock(id)
      } else {
        this.unlock(id)
      }
    },
    // 解锁
    async unlock (id) {
      let vm = {
        userId: id
      }
      let res = await userService.getUnlock(vm)
      if (res.flag) {
        this.getTableList()
        this.$message.success('已解锁！')
      }
    },
    // 锁定
    async lock (id) {
      let vm = {
        userId: id
      }
      let res = await userService.getlock(vm)
      if (res.flag) {
        this.getTableList()
        this.$message.success('已锁定！')
      }
    },
    // 获取用户列表
    async getTableList () {
      let vm = {
        userName: this.formInline.userName,
        userType: this.formInline.userType,
        isLock: this.formInline.isLock,
        page: this.cur_page,
        rows: this.rows
      }
      let res = await userService.getList(vm)
      this.tableData = res.rows;
      this.total = res.total
    },
    // 添加用户
    addUser () {
      this.isEdit = false
      this.addVisible = true
      this.addItems = {
        userName: '',
        password: '',
        email: '',
        address: '',
        phone: ''
      }
    },
    async editUser (id) {
      let vm = {
        userId: id
      }
      this.isEdit = true
      this.addVisible = true
      let res = await userService.getDetail(vm)
      this.addItems = {
        userName: res.userName,
        password: res.password,
        email: res.email,
        address: res.address,
        phone: res.phone
      }
      this.userId = res.userId
    },
    confirm () {
      this.$refs['addItems'].validate((valid) => {
        if (valid) {
          if (this.isEdit) {
            this.addItems.userId = this.userId
            this.edit()
          } else {
            this.add()
          }
        } else {
          return false;
        }
      })
    },
    async add () {
      let res = await userService.getAdd(this.addItems)
      if (res.flag) {
        this.addVisible = false
        this.$message.success("添加成功!")
        this.getTableList()
      } else {
        this.$message.success(res.msg)
      }
    },
    async edit () {
      let res = await userService.getEdit(this.addItems)
      if (res.flag) {
        this.addVisible = false
        this.$message.success("修改成功!")
        this.getTableList()
      } else {
        this.$message.success(res.msg)
      }
    },
    async AuthorSave () {
      let vm = {
        userId: this.userId,
        roleId: this.queryRoles.roleId
      }
      let res = await userService.getAccredit(vm)
      if (res.flag) {
        this.$message.success('授权成功!')
        this.authorVisible = false
      } else {
        this.$message.error(res.msg)
      }
    }
  },
  mounted () {
    this.getTableList()
  }
};
</script>
<style scoped>
.text-danger {
  color: #f56c6c;
}
.text-success {
  color: #67c23a;
}
</style>
