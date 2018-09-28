<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'泵参数列表'"></crumbs>
    <div class="container">
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item v-for="(items, index) in formItems" :key="index" :label="items.label">
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
        { label: 'pump_type:', model: 'formInline.region', type: 'select' },
        { label: 'pump_model:', model: 'formInline.region', type: 'input' },
        { label: 'p_pover:', model: 'formInline.region', type: 'input' },
        { label: 'h_head:', model: 'formInline.region', type: 'input' },
        { label: 'q_flow_rate:', model: 'formInline.region', type: 'input' }
      ]
    }
  }
}
</script>
