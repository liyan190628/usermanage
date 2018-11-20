<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'系统安装图管理'" :title2="'系统安装图管理'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="install_type:">
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
          <span @click="editVisible = true">
            <i class="el-icon-lx-add"></i>增加</span>
        </el-col>
      </el-row>
      <el-table :data="tableData" class="table" stripe style="width: 100%;">
        <el-table-column prop="pump_type" align="center" label="install_type">
        </el-table-column>
        <el-table-column prop="max" align="center" label="explain">
        </el-table-column>
        <el-table-column prop="max" align="center" label="install_picture">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>

    <SystemAdd @cancel='cancel' :show='editVisible'></SystemAdd>

  </div>
</template>
<script>
import SystemAdd from './SystemAdd'
export default {
  components: { SystemAdd },
  data() {
    return {
      formInline: {
        region: ''
      },
      formItems: [
        { title: 'pump_type:', type: 'select' },
        { title: 'pump_model:', type: 'input' },
        { title: 'p_power:', type: 'input' },
        { title: 'h_head:', type: 'input' },
        { title: 'q_flow_rate:', type: 'input' }
      ],
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
      editVisible: true
    }
  },
  methods: {
    cancel() {
      this.editVisible = !this.editVisible
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
