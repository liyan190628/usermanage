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
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">systemParameter</el-col>
        <el-col :span='2'>
          <el-button @click="addVisible = true" type="primary">+add</el-button>
        </el-col>
      </el-row>

      <div class="row-bg" id="myChart"></div>
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
import Schart from 'vue-schart'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  components: { edit, add, Schart },
  data() {
    return {
      formInline: {
        region: '',
        max_voc: ''
      },
      tableData: [],
      addVisible: false, // 新增模态框
      editVisible: false, // 修改模态框
      delVisible: false, // 删除
      addform: {},
      editform: {},
      cur_page: 1,
      rows: 10
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
    },
    getData() {
      this.$axios
        .get("/pumpms/sysparam/queryList", {
          params: {
            userName: this.formInline.userName,
            userType: this.formInline.userType,
            isLock: this.formInline.isLock,
            page: 1,
            rows: 10
          }
        })
        .then(response => {
          this.tableData = response.data.rows;
        })
        .catch(error => {
          // console.log(error);
        });
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: [0, 0.2, 0.4, 0.8, 1.0, 1.2, 1.4]
        },
        yAxis: {
          type: 'value',
          data: [0, 0.2, 0.4, 0.8, 1.0, 1.2, 1.4]
        },
        series: [{
          data: [0, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    }
  },
  mounted() {
    this.drawLine()
  },
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
#myChart{
  /* width: 1200px; */
  height: 300px;
  border-top: none;
}
.el-row--flex.is-justify-space-between{
  align-items:center;
  padding-left: 20px;
}
</style>
