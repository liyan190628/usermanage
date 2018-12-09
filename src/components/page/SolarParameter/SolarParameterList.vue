<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'太阳能管理'" :title2="'太阳能参数列表'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" class="demo-form-inline mgb10">
        <el-form-item v-for="(items, index) in formItems" :key="index" :label="items.title">
          <el-select v-if="items.type === 'select'" v-model="items.value">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-input v-model="items.value" v-else></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getListData" type="primary">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格 -->
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <!-- 系统参数管理 -->
        </el-col>
        <el-col :span="1">
          <span>
            <router-link :to="{path: '/addPumpParameter'}">
              <i class="el-icon-lx-add"></i>增加
            </router-link>
          </span>
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
        { title: 'pump_type:', type: 'select', value: '', code: 'solarPanelType' },
        { title: 'pump_model:', type: 'input', value: '', code: 'peakPower'  },
        { title: 'p_power:', type: 'input', value: '', code: 'solarPanelType'  },
        { title: 'h_head:', type: 'input', value: '', code: 'solarPanelType'  },
        { title: 'q_flow_rate:', type: 'input', value: '', code: 'solarPanelType'  }
      ],
      tableData: [],
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
</style>