<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'泵参数列表'"></crumbs>
    <div class="container mgb10">
      <el-form :inline="true" class="demo-form-inline mgb10">
        <el-form-item v-for="(item, index) in formItems" :key="index" :label="item.title">
          <el-input v-model="item.value"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">泵参数管理</el-col>
        <el-col :span="2">
          <router-link :to="{path: '/addPumpParameter'}">
            <el-button type="primary">+add</el-button>
          </router-link>
        </el-col>
      </el-row>
      <el-table :data="tableData" class="table" stripe style="width: 100%;">
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
        <el-table-column prop="operation" align="center" label="operate" width="180">
          <template slot-scope="scope">
            <!-- {{scope.row.pumpId}} -->
            <el-button @click="handleInfo(scope.row.pumpId)" type="text">Edit</el-button>
            <el-button @click="handleDelete(scope.row.pumpId)" type="text">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>

  </div>
</template>
<script>
import pumpEdit from './pumpEdit'
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
    handleCurrentChange (val) {
      this.cur_page = val
      this.getData()
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
                this.getData()
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
    // 获取泵参数列表数据
    getData() {
      let vm = {}
      for (let index of this.formItems) {
        vm[index.code] = index.value;
      }
      vm.page = this.cur_page,
      vm.rows = this.rows 
      this.$axios
        .get("/pumpms/pump/queryList", {
          params: vm
        })
        .then(res => {
          this.tableData = res.data.rows;
          this.total = res.data.total
        })
        .catch(error => {
          // console.log(error);
        });
    },
    handleInfo (testId) { // 查看详情
      // console.log(testId)
      // this.$router.push({name: 'pumpEdit', params: { id: testId}})
      this.$router.push({path: '/pumpEdit', query: {paicheNo: testId}})
    },
    saveEdit () { // 编辑

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