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
          <el-button type="primary">查询</el-button>
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
        installType: '' // 安装类型
      },
      tableData: [ // 表格数据
        {
          installType: 'p_1',
          explainRemark: 20,
          picPath: 0.8
        }
      ],
      cur_page: 1, // 当前页
      rows: 10,
      editVisible: false
    }
  },
  methods: {
    cancel() { // 关闭弹出框
      this.editVisible = !this.editVisible
    },
    getData() { // 获取列表数据
      let vm = {
        installType: this.installType,
        page: this.cur_page,
        rows: this.rows
      }
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
