<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'系统参数管理'"
            :title2="'系统参数列表'"></crumbs>
    <div class="container system-content">
      <!-- 检索条件 -->
      <el-form :inline="true"
               :model="formInline"
               class="demo-form-inline mgb10">
        <el-form-item label="pump_type：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">query</el-button>
          <el-button @click="addVisible = true"
                     type="primary">add</el-button>
        </el-form-item>
      </el-form>
      <!-- 图表 -->
      <div id="myChart"></div>
    </div>
    <!-- 新增模态框 -->
    <add :show='addVisible'
         @cancel='addCancel'></add>
    <!-- 修改模态框 -->
    <edit :show='editVisible'
          @cancel='editCancel'></edit>
  </div>
</template>
<script>
import edit from './edit'
import add from './add'
var echarts = require('echarts')
export default {
  components: { edit, add },
  data () {
    return {
      formInline: {},
      addVisible: false, // 新增模态框
      editVisible: false // 修改模态框
    }
  },
  methods: {
    getTableList () {
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
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '扬程曲线图',
          subtext: '数据来自西安兰特水电测控技术有限公司',
          x: 'center'
        },
        tooltip: {
          // trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['扬程曲线图'],
          x: 'left',
          show: true
        },
        xAxis: [
          {
            name: '输出功率(WATTS)',
            type: 'category',
            data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '出水量(LTTRES/MINUTE)',
            min: 0,
            max: 90,
            interval: 10
          },
          {
            type: 'category'
            // data: [90, 80, 70, 60, 50, 40, 30, 20, 10]
          }
        ],
        series: [
          {
            name: '90meter',
            type: 'line',
            data: [0, 0, 0, 2, 6, 8, 11, 11, 10, 11, 10]
          },
          {
            name: '80meter',
            type: 'line',
            data: [0, 0, 1, 6, 11, 15, 19, 22, 26, 27, 31]
          },
          {
            name: '70meter',
            type: 'line',
            data: [0, 0, 5, 10, 14, 18, 22, 26, 29, 33, 39]
          },
          {
            name: '60meter',
            type: 'line',
            data: [0, 3, 8, 13, 18, 25, 29, 34, 37, 41, 45]
          },
          {
            name: '50meter',
            type: 'line',
            data: [0, 8, 15, 20, 25, 30, 35, 40, 43, 49, 54]
          },
          {
            name: '40meter',
            type: 'line',
            data: [2, 12, 19, 26, 32, 37, 43, 49, 54, 58, 63]
          },
          {
            name: '30meter',
            type: 'line',
            data: [8, 18, 27, 34, 41, 48, 53, 59, 63, 67, 71]
          },
          {
            name: '20meter',
            type: 'line',
            data: [17, 27, 39, 47, 52, 58, 62, 68, 70, 74, 79]
          },
          {
            name: '10meter',
            type: 'line',
            data: [31, 42, 51, 57, 62, 67, 71, 74, 77, 81, 84]
          }
        ]
      })
    }
  },
  mounted () {
    this.drawLine()
  },
}
</script>

<style scoped>
#myChart {
  height: 300px;
}
.el-row--flex.is-justify-space-between {
  align-items: center;
  padding-left: 20px;
}
</style>
