<template>
  <div>
    <el-dialog title="Add" :visible.sync="addVisible">
      <el-form :model="addForm" :rules="addFormRules" :ref="addForm" label-width="120px" size="small">
        <el-form-item label="pump_type">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="导入excel">
          <el-button @click="excelImport" class="px-4 mb-3" type="primary">选择文件</el-button>
          <input type="file" @change="getExcel" ref="excel" style="display: none;" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel">
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">cancel</el-button>
        <el-button @click="addConfirm" type="primary">confirm</el-button>
      </span>
    </el-dialog>
    <!-- 面包屑导航 -->
    <crumbs :title1="'系统参数管理'" :title2="'系统参数列表'"></crumbs>
    <div class="container system-content">
      <!-- 检索条件 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="pump_type：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getTableList()" type="primary">query</el-button>
        </el-form-item>
      </el-form>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>扬程曲线管理</span>
          <el-button @click="addVisible = true" type="text" style="float: right;">UpLoad</el-button>
          <el-button type="text" class="mr-10 mb-10" style="float: right;">Edit</el-button>
          <el-button type="text" style="float: right;">Delete</el-button>
        </div>
        <!-- 图表 -->
        <div id="myChart"></div>
      </el-card>
    </div>
  </div>
</template>
<script>
// import qs from 'qs'
import { sysparamService } from '@/api/sysparam.js'
var echarts = require('echarts')
export default {
  data () {
    return {
      formInline: {},
      addVisible: false, // 新增模态框
      seriesDatas: [],
      powers: [],
      addForm: {},
      addFormRules: {}
    }
  },
  methods: {
    async getTableList () {
      let vm = {
        pumpId: 2
      }
      let res = await sysparamService.getList(vm)
      let data = res
      this.powers = res.powers
      this.seriesDatas = [data[10], data[20], data[30], data[40], data[50], data[60], data[70], data[80], data[90]]
      this.drawLine()
    },
    drawLine () {
      let myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({ // 绘制图表
        title: {
          text: '扬程曲线图',
          subtext: '数据来自西安兰特水电测控技术有限公司',
          x: 'center'
        },
        tooltip: {
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
            data: this.powers,
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
            data: this.seriesDatas[8]
          },
          {
            name: '80meter',
            type: 'line',
            data: this.seriesDatas[7]
          },
          {
            name: '70meter',
            type: 'line',
            data: this.seriesDatas[6]
          },
          {
            name: '60meter',
            type: 'line',
            data: this.seriesDatas[5]
          },
          {
            name: '50meter',
            type: 'line',
            data: this.seriesDatas[4]
          },
          {
            name: '40meter',
            type: 'line',
            data: this.seriesDatas[3]
          },
          {
            name: '30meter',
            type: 'line',
            data: this.seriesDatas[2]
          },
          {
            name: '20meter',
            type: 'line',
            data: this.seriesDatas[1]
          },
          {
            name: '10meter',
            type: 'line',
            data: this.seriesDatas[0]
          }
        ]
      })
    },
    addConfirm() {},
    excelImport() {
      this.$refs.excel.click()
    },
    getExcel(event) {
      let file = event.target.files[0]
      let formData = new FormData()
      formData.append('file', file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data' //之前说的以表单传数据的格式来传递fromdata
        }
      }
      let vm = {
        file: formData,
        pumpId: 1
      }
      this.$axios
        .post('/pumpms/sysparam/upload', vm, config)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
            // console.log(error);
        })
      event.target.value = ''
    }
  },
  mounted () {
    this.getTableList()
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
