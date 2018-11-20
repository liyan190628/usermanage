<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'扬程曲线基础数据'" :title2="'扬程曲线基础数据管理'"></crumbs>

    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="pump_model">
          <el-select></el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格 -->
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          扬程曲线管理
        </el-col>
        <el-col :span="2">
          <span style="color:#409EFF;">删除</span>
          <span style="color:#409EFF;">编辑</span>
          <span style="color:#409EFF;">
            <i class="el-icon-lx-add"></i>增加</span>
        </el-col>
      </el-row>

      <!-- 图表 -->
      <!-- <div class="row-bg" style="border-top:none;">
        <schart class="schart" canvasId="line" :data="data1" type="line" :options="options2"></schart>
      </div> -->
      <div class="row-bg" id="myChart"></div>

    </div>

  </div>

  <!-- </div> -->
</template>
<script>
import Schart from 'vue-schart'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  components: {
    Schart
  },
  data() {
    return {
      formInline: {
        region: ''
      }
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
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
#myChart{
  /* width: 1200px; */
  height: 300px;
  border-top: none;
}
</style>