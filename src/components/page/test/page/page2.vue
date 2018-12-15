<template>
  <div class="bg-white py-20">
     <!-- 标题 -->
    <el-row class='px-30'>
      <el-col><h1>PS2-4000 C-SJ8-15</h1></el-col>
    </el-row>
    <el-row class='px-30 mt-10'>
      <el-col><h3>Solar Submersible Pump System for 4" wells</h3></el-col>
    </el-row>
    <el-row class='px-30 mt-20'>
      <el-col><h3>Pump Chart</h3></el-col>
    </el-row>
    
    <!-- 图表 -->
    <div class="row-bg" id="myChart"></div>
    
    <el-row style="margin-top: 80px;" class='px-30 mt-10'>
      <el-col><h3>Dimensions and Weights</h3></el-col>
    </el-row>

    <el-row type="flex" class="px-30 mt-20 row-bg">
      <el-col :span="3">
        <h4>Controller</h4>
        <p class="mt-20">H1 = 352mm</p>
        <p>H2 = 352mm</p>
        <p>W1 = 352mm</p>
        <p>w2 = 352mm</p>
        <p>W3 = 352mm</p>
        <p>D1 = 352mm</p>
      </el-col>
      <el-col :span="9">
        <img src="@/assets/pdf-8.jpg" alt="">
      </el-col>
      <el-col :span="3">
        <h4>Pump Unit</h4>
        <p class="mt-20">A = 352mm</p>
        <p>B = 352mm</p>
        <p>C = 352mm</p>
        <p>D = 352mm</p>
        <p>E = 352mm</p>
        <p>S = 352mm</p>
      </el-col>
      <el-col :span="6">
        <img src="@/assets/pdf-9.jpg" alt="">
      </el-col>
    </el-row>
    
    <div class="px-30">
      <el-row type="flex" class="row-bg pd border-bottom" justify="end">
      <el-col :span="2">Net weight</el-col>
    </el-row>
    </div>
    
    <div class="px-30">
      <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
        <el-col :span="2">Controller</el-col>
        <el-col :span="3">Quantity Details</el-col>
      </el-row>
      <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
        <el-col :span="2">Pump Unit</el-col>
        <el-col :span="3">Quantity Details</el-col>
      </el-row>
      <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
        <el-col :span="2">Motor</el-col>
        <el-col :span="3">Quantity Details</el-col>
      </el-row>
      <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
        <el-col :span="2">Pump End</el-col>
        <el-col :span="3">Quantity Details</el-col>
      </el-row>
      <el-row class="py-30 mt-10">
        *Vmp: MPP-voltage under Standard Test Conditions (STC): 1000 W/m² solar irradiance, 25 °C cell temperature
      </el-row>
    </div>
    

    <!-- 页面底部 -->
    <el-row style="margin-top:100px;" class="px-30">
      <h5>BERNT LORENTZ GmbH & Co. KG</h5>
      <P>Siebenstuecken 24, 24558 Henstedt-Ulzburg, </P>
      <P>Germany, Tel +49 (0)4193 8806-700, www.lorentz.de</P>
    </el-row>
    
    <el-row class="px-30 mt-20">
      <el-col :span="1">
        <img src="@/assets/pdf-2.png" alt="">
      </el-col>
      <el-col :span="28">
        <p>Created by LORENTZ COMPASS 3.1.0.92</p>
        <P>All specifications and information are given with good intent, errors are possible and products may be subject to change without notice.Pictures may differ from actual </P>
        <P>products depending on local market requirements and regulations.</P>
      </el-col>
    </el-row>



  </div>
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
  },
  mounted() {
    this.drawLine()
  }
}
</script>

