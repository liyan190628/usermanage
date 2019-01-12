<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'motorManage'"></crumbs>
    <div class="container system-content">
      <!-- 检索条件 -->
      <el-form :inline="true" class="demo-form-inline mgb10">
        <el-form-item label="motorName：">
          <el-input v-model="motorName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getTableList" type="primary">query</el-button>
          <el-button @click="addVisible = true" type="primary">add</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <!-- <el-card shadow="hover"> -->
        <el-table border :data="tableData" class="table" stripe style="width: 100%;">
          <el-table-column fixed="left" label="序号" type="index" align="center" width="50"/>
          <el-table-column prop="motorName" align="center" label="motorName"></el-table-column>
          <!-- 操作 -->
          <el-table-column width="260" align="center" label="operate">
            <template slot-scope="scope">
              <el-button @click="handleDetails(scope.row.motorId)" type="text">details</el-button>
              <el-button @click="handleEdit(scope.row.motorId, scope.row)" type="text">edit</el-button>
              <el-button @click="handleDelete(scope.row.motorId)" type="text">delete</el-button>
              <el-button @click="handleEdit(scope.row.stId)" type="text">导出pdf</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="cur_page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="rows"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      <!-- </el-card> -->
    </div>
    <!-- 新增 -->
    <add :show='addVisible' @cancel='addCancel'></add>
    <edit @cancel='editCancel' :show='editVisible' :motorId='motorId'></edit>
    <info @cancel='infoCancel' :show='infoVisible' :motorId='motorId'></info>
  </div>
</template>
<script>
import add from './add'
import edit from './edit' // 编辑
import info from './info'
import { motorServices } from '@/api/motorServices.js'
export default {
  components: { edit, add, info },
  data() {
    return {
      motorName: '',
      tableData: [],
      editVisible: false, // 编辑
      authorVisible: false, // 授权
      addVisible: false, // 增加
      form: {},
      infoVisible: false, // 查看详情
      total: 10,
      rows: 10,
      cur_page: 1,
      motorId: ''
    }
  },
  methods: {
    infoCancel() {
      this.infoVisible = !this.infoVisible
    },
    handleDetails(id) {
      this.infoVisible = true
      this.motorId = id
    },
    async getTableList() {
      let vm = {
        motorName: this.motorName,
        page: 1,
        rows: 10
      }
      let res = await motorServices.getMotorList(vm)
      this.tableData = res.rows
    },
    // 确定删除
    handleDelete(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteMotor(id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
        });
      });
    },
    async deleteMotor (id) {
      let vm = {
        motorId: id
      }
      let res = await motorServices.getMotorDelete(vm)
      if (res.flag) {
        this.delVisible = false
        this.$message.success("删除成功")
        this.getTableList()
      } else {
        this.$message.error(res.msg)
      }
    },
    handleEdit(id, items) {
      this.editVisible = !this.editVisible
      this.motorId = items
    },
    saveEditInfo () {
    },
    confrimInfo () {
      this.infoVisible = false
    }
  },
  created() {
    this.getTableList()
  },
}
</script>
