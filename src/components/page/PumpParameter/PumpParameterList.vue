<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'泵参数列表'"></crumbs>
    <div class="container mgb10">
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
          系统参数管理
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
        <el-table-column prop="pump_type" align="center" label="pump_type">
        </el-table-column>
        <el-table-column prop="pump_model" align="center" label="pump_model">
        </el-table-column>
        <el-table-column prop="P_power(KW)" align="center" label="P_power(KW)">
        </el-table-column>
        <el-table-column prop="H_head(M)" align="center" label="H_head(M)">
        </el-table-column>
        <el-table-column prop="Q_flow_rate(m/h)" align="center" label="Q_flow_rate(m/h)">
        </el-table-column>
        <el-table-column prop="operate" align="center" label="operate" width="180">
          <template slot-scope="scope">
            <el-button @click="editVisible = true" type="text">详情</el-button>
            <el-button @click="editVisible = true" type="text">修改</el-button>
            <el-button @click="handleDelete(scope.$index, scope.row)" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>

    <!-- 新增模态框 -->
    <!-- <addModal :show='addVisible' :items='items' :userform='addform' @cancel='addCancel'></addModal> -->
    <!-- 修改模态框 -->
    <editModal :show='editVisible' :items='items' :userform='editform' @cancel='editCancel'></editModal>
    <!-- 删除模态框 -->
    <deleteModal :show='delVisible' @cancel='deleteCancel' @deleteRow='deleteRow'></deleteModal>

  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        region: ''
      },
      tableData: [
        {
          pump_type: 'p_1',
          max: 20,
          head: 0.8,
          cable: '0.6/1KV,450/750V',
          pipes: '0.25,0.3,0.35'
        },
        {
          pump_type: 'p_1',
          max: 20,
          head: 0.8,
          cable: '0.6/1KV,450/750V',
          pipes: '0.25,0.3,0.35'
        },
        {
          pump_type: 'p_1',
          max: 20,
          head: 0.8,
          cable: '0.6/1KV,450/750V',
          pipes: '0.25,0.3,0.35'
        }
      ],
      cur_page: 1,
      // addVisible: false, // 新增模态框
      editVisible: false, // 修改模态框
      delVisible: false, // 删除
      formItems: [
        { title: 'pump_type:', type: 'select' },
        { title: 'pump_model:', type: 'input' },
        { title: 'p_power:', type: 'input' },
        { title: 'h_head:', type: 'input' },
        { title: 'q_flow_rate:', type: 'input' }
      ]
    }
  },
  methods: {
    // 确定删除
    deleteRow() {
      this.tableData.splice(this.idx, 1)
      this.$message.success('删除成功')
      this.delVisible = false
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