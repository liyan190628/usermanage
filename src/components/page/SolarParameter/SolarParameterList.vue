<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'太阳能管理'" :title2="'太阳能参数列表'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item v-for="(items, index) in formItems" :key="index" :label="items.title">
          <el-select v-if="items.type === 'select'" v-model="formInline.region">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-input v-else></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
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
        { title: 'pump_type:', type: 'select' },
        { title: 'pump_model:', type: 'input' },
        { title: 'p_power:', type: 'input' },
        { title: 'h_head:', type: 'input' },
        { title: 'q_flow_rate:', type: 'input' }
      ]
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