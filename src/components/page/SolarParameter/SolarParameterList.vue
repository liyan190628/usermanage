<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'太阳能管理'" :title2="'太阳能参数列表'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" class="demo-form-inline mgb10">
        <el-form-item v-for="(items, index) in formItems" :key="index" :label="items.title">
          <el-input v-model="items.value"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getListData" type="primary">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格 -->
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="2">
          <!-- <span @click="addCancel"><i class="el-icon-lx-add"></i>增加</span> -->
          <el-button @click="addCancel" type="primary">+add</el-button>
        </el-col>
      </el-row>

      <el-table :data="tableData" class="table" stripe style="width: 100%;">
        <el-table-column width="200" prop="solarPanelType" label="solar_panel_type">
        </el-table-column>
        <el-table-column width="190" prop="peakPower" label="peak_power">
        </el-table-column>
        <el-table-column width="260" prop="tolerancePmax" label="production_tolerance_of_pmax">
        </el-table-column>
        <el-table-column width="180" prop="voltagePmax" label="voltage_pmax">
        </el-table-column>
        <el-table-column width="180" prop="currentPmax" label="current_pmax">
        </el-table-column>
        <el-table-column width="180" prop="openCircuitVoltage" label="open_circuit_voltag">
        </el-table-column>
        <el-table-column width="260" prop="shortCircuitCurrent" label="short_circuit_current">
        </el-table-column>
        <el-table-column width="260" prop="maxSeriesFuse" label="maximum_series_fuse">
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>

    </div>

     <!-- 添加太阳能参数 -->
    <addModal @cancel='addCancel' @saveEdit="addUser" :show="addVisible" :items="addItems"></addModal>

  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        region: ''
      },
      formItems: [
        { title: 'peakPower:', type: 'input', value: '', code: 'peakPower' },
        { title: 'openCircuitVoltage:', type: 'input', value: '', code: 'openCircuitVoltage'  },
      ],
      tableData: [],
      addVisible: false, // 添加
      addItems: [
        { title: "solarPanelType:", type: "input", code: "", vm: "solarPanelType" },
        { title: "peakPower:", type: "input", code: "", vm: "peakPower" },
        { title: "tolerancePmax:", type: "input", code: "", vm: "tolerancePmax" },
        { title: "voltagePmax:", type: "input", code: "", vm: "voltagePmax" },
        { title: "currentPmax;:", type: "input", code: "", vm: "currentPmax;" },
        { title: "openCircuitVoltage:", type: "input", code: "", vm: "openCircuitVoltage" },
        { title: "shortCircuitCurrent:", type: "input", code: "", vm: "shortCircuitCurrent" },
        { title: "maxSeriesFuse:", type: "input", code: "", vm: "maxSeriesFuse" }
      ],
      rows: 10, // 显示条数
      cur_page: 1, // 当前页
    }
  },
  methods: {
    getListData () { // 列表数据
      let vm = {}
      for (let index of this.formItems) {
        vm[index.code] = index.value;
      }
      vm.page = this.cur_page
      vm.rows = this.rows
      this.$axios
        .get("/pumpms/solarPanel/queryList", {
          params: vm
        })
        .then(response => {
          console.log(response)
          this.tableData = response.data.rows;
        })
        .catch(error => {
          // console.log(error);
        });
    },
    addCancel () {
      this.addVisible = !this.addVisible
    },
    addUser() {
      let vm = {};
      for (let index of this.addItems) {
        vm[index.vm] = index.code;
      }
      this.$axios
        .get("/pumpms/solarPanel/add", {
          params: vm
        })
        .then(response => {
           if (response.data.flag) {
            this.addVisible = false
            this.$message.success("添加成功!")
            this.getListData()
          } else {
            this.$message.error(response.data.msg)
          }
        })
        .catch(response => {
          // console.log(error);
        });
    },
  },
  created() {
    this.getListData()
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
</style>