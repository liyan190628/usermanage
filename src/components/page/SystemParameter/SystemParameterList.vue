<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'系统参数管理'" :title2="'系统参数列表'"></crumbs>

    <div class="container system-content">
      <!-- 检索条件 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="pump_type：">
          <el-select v-model="formInline.region">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="max_voc：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="max_vmp：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="head_factor：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          系统参数管理
        </el-col>
        <el-col :span="1">
          <span @click="addVisible = true">
            <i class="el-icon-lx-add"></i>增加</span>
        </el-col>
      </el-row>
      <el-table :data="tableData" class="table" stripe style="width: 100%;">
        <el-table-column prop="pump_type" align="center" label="pump_type">
        </el-table-column>
        <el-table-column prop="max" align="center" label="max_voc(v)">
        </el-table-column>
        <el-table-column prop="max" align="center" label="max_vmp(v)">
        </el-table-column>
        <el-table-column prop="head" align="center" label="head_factor">
        </el-table-column>
        <el-table-column prop="cable" align="center" label="cable_type">
        </el-table-column>
        <el-table-column prop="pipes" align="center" label="pipes_caliber(m)">
        </el-table-column>
        <el-table-column prop="operate" align="center" label="operate" width="180">
          <template slot-scope="scope">
            <el-button @click="editVisible = true" type="text">修改</el-button>
            <el-button @click="handleDelete(scope.$index, scope.row)" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>

    <!-- 新增模态框 -->
    <add :show='addVisible' :userform='addform' @cancel='addCancel'></add>
    <!-- 修改模态框 -->
    <edit :show='editVisible' :userform='editform' @cancel='editCancel'></edit>
    <!-- 删除模态框 -->
    <deleteModal :show='delVisible' @cancel='deleteCancel' @deleteRow='deleteRow'></deleteModal>

  </div>
</template>
<script>
import edit from './edit'
import add from './add'
export default {
  components: { edit, add },
  data() {
    return {
      formInline: {
        region: ''
      },
      tableData: [
        {
          pump_type: 'p_1',
          max: 20,
          head: 0.8,
          cable: '0.6/1KV,450/750V',
          pipes: '0.25,0.3,0.35'
        },
        {
          pump_type: 'p_1',
          max: 20,
          head: 0.8,
          cable: '0.6/1KV,450/750V',
          pipes: '0.25,0.3,0.35'
        },
        {
          pump_type: 'p_1',
          max: 20,
          head: 0.8,
          cable: '0.6/1KV,450/750V',
          pipes: '0.25,0.3,0.35'
        }
      ],
      cur_page: 1,
      addVisible: false, // 新增模态框
      editVisible: false, // 修改模态框
      delVisible: false, // 删除
      addform: {},
      editform: {}
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.cur_page = val
      // this.getData()
    },
    handleDelete(index, row) {
      this.idx = index
      this.delVisible = true
    },
    // 新增
    addCancel() {
      this.addVisible = !this.addVisible
    },
    // 编辑
    editCancel() {
      this.editVisible = !this.editVisible
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
