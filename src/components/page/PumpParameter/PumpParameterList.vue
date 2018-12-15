<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'泵参数列表'"></crumbs>
    <div class="container mgb10">
      <el-form :inline="true" class="demo-form-inline mgb10">
        <el-form-item v-for="(item, index) in formItems" :key="index" :label="item.title">
          <el-select v-if="item.type === 'select'" v-model="item.value">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-input v-model="item.value" v-else></el-input>
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
            <el-button @click="handleInfo(scope.$index)" type="text">详情</el-button>
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
     
    <!-- 查看详情弹出框 -->
    <infoModal :show='infoVisible' :form='infoForm'></infoModal>
    <!-- 修改模态框 -->
    <editModal :show='editVisible' :items='items' :userform='editform' @cancel='editCancel'></editModal>
    <!-- 删除模态框 -->
    <deleteModal :show='delVisible' @cancel='deleteCancel' @deleteRow='deleteRow'></deleteModal>

  </div>
</template>
<script>
export default {
  data() {
    return {
      formItems: [ // 查询条件
        { title: 'pump_type:', type: 'select', value: '', code: 'pumpType' },
        { title: 'pump_model:', type: 'input', value: '', code: 'pumpModel' },
        { title: 'p_power:', type: 'input', value: '', code: 'powerMax' },
        { title: 'h_head:', type: 'input',value: '', code: 'headMax' },
        { title: 'q_flow_rate:', type: 'input', value: '', code: 'flowMax' }
      ],
      tableData: [ // 表格数据
        {
          pumpType: 'p_1',
          powerMax: 20,
          head: 0.8,
          cable: '0.6/1KV,450/750V',
          pipes: '0.25,0.3,0.35'
        }
      ],
      infoVisible: false, // 详情弹出框
      editVisible: false, // 修改模态框
      delVisible: false, // 删除
      editform: {}, // 编辑
      items: [{ title: 'pump_type', tyep: 'select' }],
      infoForm: {}, // 详情
      cur_page: 1, // 当前页
      rows: 10
    }
  },
  methods: {
    // 确定删除
    deleteRow() {
      this.tableData.splice(this.idx, 1)
      this.$message.success('删除成功')
      this.delVisible = false
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
        .then(response => {
          this.tableData = response.data.rows;
        })
        .catch(error => {
          // console.log(error);
        });
    },
    handleInfo (index) { // 查看详情
      this.infoVisible = !this.infoVisible
      this.infoForm = this.tableData[index]
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