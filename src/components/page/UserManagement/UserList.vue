<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'用户管理'" :title2="'用户列表'"></crumbs>
    <!-- 搜索 -->
    <div class="container">
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="用户名：">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item label="用户权限：">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item label="状态：">
          <el-select v-model="formInline.region">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
        </el-form-item>
      </el-form>
      <el-row class="pb-10">
        <el-button type="primary">添加用户</el-button>
      </el-row>
      <!-- 表格 -->
      <el-card shadow="hover">
        <el-table :data="tableData" class="table" stripe style="width: 100%;">
          <el-table-column prop="date" align="center" label="用户名">
          </el-table-column>
          <el-table-column prop="name" align="center" label="密码">
          </el-table-column>
          <el-table-column prop="address" align="center" label="联系方式">
          </el-table-column>
          <el-table-column prop="email" align="center" label="邮箱">
          </el-table-column>
          <el-table-column prop="address" align="center" label="权限">
          </el-table-column>
          <el-table-column prop="address" align="center" label="当前状态">
          </el-table-column>
          <el-table-column prop="address" align="center" label="操作" width="200">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.$index, scope.row)" type="text">编辑</el-button>
              <el-button @click="handleDelete(scope.$index, scope.row)" type="text">删除</el-button>
              <el-button type="text">解锁</el-button>
              <el-button type="text">授权</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </el-card>
    </div>
    <!-- 编辑用户 -->
    <edit @cancel='editCancel' :show='editVisible' :userform='userform'></edit>
    <!-- 删除用户 -->
    <deleteModal :show='delVisible' @cancel='deleteCancel' @deleteRow='deleteRow'></deleteModal>

  </div>
</template>
<script>
import edit from './UserOperation/edit'
export default {
  components: { edit },
  data() {
    return {
      cur_page: 1,
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '18888888888',
        email: '97620101@qq.com'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '18888888888',
        email: '97620101@qq.com'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '18888888888',
        email: '97620101@qq.com'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '18888888888',
        email: '97620101@qq.com'
      }],
      editVisible: false, // 编辑
      delVisible: false, // 删除
      userform: {},
      idx: -1
    }
  },
  methods: {
    query() {
      console.log('submit!')
    },
    handleCurrentChange(val) {
      this.cur_page = val
      // this.getData()
    },
    handleDelete(index, row) {
      this.idx = index
      this.delVisible = true
    },
    // 编辑
    editCancel() {
      this.editVisible = !this.editVisible
    },
    handleEdit(index, row) {
      this.idx = index
      const item = this.tableData[index]
      this.userform = {
        name: item.name,
        date: item.date,
        address: item.address
      }
      this.editVisible = true
    },
    deleteCancel() {
      this.delVisible = !this.delVisible
    },
    // 确定删除
    deleteRow() {
      this.tableData.splice(this.idx, 1)
      this.$message.success('删除成功')
      this.delVisible = false
    }
  }
}
</script>
