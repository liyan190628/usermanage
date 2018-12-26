<template>
  <div>
    <!-- logo及公司相关信息 -->
    <el-row type="flex" class="row-bg py-20 px-30">
      <el-col :span="7">
        <img src="@/assets/logo.png" alt="">
        <p class='pd text-bold'>Tuesday, 16 May 2017</p>
        <h3>Solar Water Pump @Chiang Rai</h3>
      </el-col>
      <el-col :span="8">
        <h4 class='pb-10'>ABO Trading Co.,Ltd</h4>
        <p class='text-bold'>17/6-7 Moo 4, Chiangmai-Lumpang </p>
        <p class='text-bold'>Road, T.Nongpakrang, A.Muang</p>
        <p class='text-bold'>Chiangmai</p>
        <p class='text-bold'>www.abotrading.co.th</p>
      </el-col>
      <el-col :span="6">
        <h4 class='pb-10'>K.Issaraporn</h4>
        <p class='text-bold'>Tel: 0 5324 1617</p>
        <p class='text-bold'>Fax: 0 5324 1616</p>
        <p class='text-bold'>issaraporn@abotrading.co.th</p>
      </el-col>
    </el-row>
    
    <!-- 输出的曲线 -->
    <el-row class='px-30'>
      <el-col><h4>Solar pumping project</h4></el-col>
    </el-row>

    <div class="px-30 mt-10">
      <el-col class='border-bottom2'><h3>System characteristic</h3></el-col>
    </div>

    <div class="row-bg" id="myChart"></div>


    <!-- 页尾 -->
    <el-row type="flex" class="row-bg py-20 px-30">
      <el-col :span="1">2/5</el-col>
      <el-col :span="1">
        <img src="@/assets/pdf-2.png" alt="">
      </el-col>
      <el-col :span="24">
        <p>Created by LORENTZ COMPASS 3.1.0.92</p>
        <p>All specifications and information are given with good intent, errors are possible and products may be subject to change</p>
        <p>without notice.</p>
      </el-col>
      <el-col :span="6">
        <img src="@/assets/pdf-3.jpg" alt="">
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
  data () {
    return {
    }
  },
  components: { Schart },
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
