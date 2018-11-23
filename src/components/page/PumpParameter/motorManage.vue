<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'motorManage'"></crumbs>

    <div class="container system-content">
      <!-- 检索条件 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="motorName：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 添加 -->
      <el-row class="pb-20" :gutter="24">
        <el-col :span="2" :offset="22">
          <el-button @click="addVisible = true" type="primary">+add</el-button>
        </el-col>
      </el-row>

      <el-card shadow="hover">
        <el-table :data="tableData" class="table" stripe style="width: 100%;">
          <el-table-column prop="address" align="center" label="motorName">
          </el-table-column>
          <el-table-column prop="address" align="center" label="operate">
            <template slot-scope="scope">
              <el-button @click="handleDelete(scope.$index, scope.row)" type="text">details</el-button>
              <el-button @click="handleEdit(scope.$index, scope.row)" type="text">edit</el-button>
              <el-button @click="handleDelete(scope.$index, scope.row)" type="text">delete</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </el-card>

    </div>
    <!-- 新增模态框 -->
    <add :show='addVisible' :items='items' @cancel='addCancel'></add>
    <!-- 编辑用户 -->
    <edit @cancel='editCancel' :show='editVisible' :items='items'></edit>
    <!-- 删除模态框 -->
    <deleteModal :show='delVisible' @cancel='deleteCancel' @deleteRow='deleteRow'></deleteModal>
  </div>
</template>
<script>
import add from '../../modal/addModal'
import edit from '../../modal/editModal' // 编辑
export default {
  components: { edit, add },
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
      }],
      editVisible: false, // 编辑
      delVisible: false, // 删除
      authorVisible: false, // 授权
      addVisible: false, // 增加
      items: [
        { title: 'motorName', type: '' },
        { title: 'Voltage', type: '' },
        { title: 'Current', type: '' },
        { title: 'Motor Efficiency', type: '' },
        { title: 'MPPT Efficiency', type: '' },
        { title: 'Connection standard:NEMA', type: '' },
        { title: 'Water temp', type: '' },
        { title: 'Insulation class', type: '' },
        { title: 'Enclosure class', type: '' },
        { title: 'Submersion', type: '' },
        { title: 'Required cooling flow', type: '' }
      ]
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
    authorCancel() {
      this.authorVisible = !this.authorVisible
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
