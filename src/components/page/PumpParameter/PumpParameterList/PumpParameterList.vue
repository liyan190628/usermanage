<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'泵参数列表'"></crumbs>
    <div class="container mgb10">
      <el-form :inline="true" class="demo-form-inline mgb10">
        <el-form-item :label-width="'90px'" v-for="(item, index) in formItems" :key="index" :label="item.title">
          <el-input v-model="item.value"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getTableList()" type="primary">query</el-button>
          <el-button @click="linkTo('addPumpParameter')" type="primary">add</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table border :data="tableData" stripe style="width: 100%;">
        <el-table-column fixed="left" label="序号" type="index" align="center" width="50"/>
        <el-table-column prop="pumpType" align="center" label="pump_type">
        </el-table-column>
        <el-table-column prop="pumpModel" align="center" label="pump_model">
        </el-table-column>
        <el-table-column prop="powerMax" align="center" label="P_power(KW)">
        </el-table-column>
        <el-table-column prop="headMax" align="center" label="H_head(M)">
        </el-table-column>
        <el-table-column prop="flowMax" align="center" label="Q_flow_rate(m/h)">
        </el-table-column>
        <el-table-column prop="operation" align="center" label="operate" width="280">
          <template slot-scope="scope">
            <el-button @click="link(scope.row.pumpId)" type="text">Edit</el-button>
            <el-button @click="handleDelete(scope.row.pumpId)" type="text">Delete</el-button>
            <el-button @click="handleDelete(scope.row.pumpId)" type="text">PDF</el-button>
            <el-button @click="handleDelete(scope.row.pumpId)" type="text">Download</el-button>
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
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import pumpEdit from './pumpEdit'
import { pumpService } from '@/api/pumpService.js'
export default {
  components: { pumpEdit },
  data() {
    return {
      formItems: [ // 查询条件
        { title: 'pump_type:', value: '', code: 'pumpType' },
        { title: 'pump_model:', value: '', code: 'pumpModel' },
        { title: 'p_power:', value: '', code: 'powerMax' },
        { title: 'h_head:', value: '', code: 'headMax' },
        { title: 'q_flow_rate:', value: '', code: 'flowMax' }
      ],
      tableData: [], // 表格数据
      infoVisible: false, // 详情弹出框
      editform: {}, // 编辑
      infoForm: {}, // 详情
      cur_page: 1, // 当前页
      rows: 10,
      total: 10
    }
  },
  methods: {
    link(id) {
      localStorage.setItem('testId', id)
      this.$router.push('pumpEdit')
    },
    handleSizeChange(val) {
      this.rows = val
      this.getTableList()
    },
    handleCurrentChange (val) {
      this.cur_page = val
      this.getTableList()
    },
    handleDelete(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios
            .get("/pumpms/pump/delete", {
              params: {
                pumpId: id
              }
            })
            .then(res => {
              if (res.data.flag) {
                this.delVisible = false
                this.$message.success("删除成功")
                this.getTableList()
              } else {
                this.$message.error(res.data.msg)
             }
         })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    async getTableList() { // 获取泵参数列表数据
      let vm = {}
      for (let index of this.formItems) {
        vm[index.code] = index.value;
      }
      vm.page = this.cur_page,
      vm.rows = this.rows
      let res = await pumpService.getList(vm)
      this.tableData = res.rows;
      this.total = res.total
    }
  },
  mounted() {
    this.getTableList()
  },
}
</script>
<style scoped>
.row-bg{
  border: 1px solid #ccc;
  padding: 4px 4px;
}
.table{
  border: 1px solid #ccc;
  border-top: none;
}
.el-row--flex.is-justify-space-between{
  align-items:center;
  padding-left: 20px;
}
</style>
