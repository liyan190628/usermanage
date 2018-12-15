<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'附件管理'" :title2="'附件列表'"></crumbs>
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
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="2">
          <el-button @click="addVisible = !addVisible" type="primary">+add</el-button>
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
    </div>

    <!-- 修改模态框 -->
    <editModal :show='editVisible' :items='items' :userform='editform' @cancel='editCancel'></editModal>
    <!-- 删除模态框 -->
    <deleteModal :show='delVisible' @cancel='deleteCancel' @deleteRow='deleteRow'></deleteModal>
    <!-- 增加附件 -->
    <addAttachment :show='addVisible' :items='items' :userform='editform' @cancel='addCancel'></addAttachment>

  </div>
</template>
<script>
import addAttachment from './addAttachment'
export default {
  components: { addAttachment },
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
      ],
      tableData: [
        { pump_type: 'p-1' }
      ],
      cur_page: 1,
      // addVisible: false, // 新增模态框
      editVisible: false, // 修改模态框
      delVisible: false, // 删除
      addVisible: false, // 增加
      editform: {}, // 编辑
      items: [{ title: 'pump_type', tyep: 'select' }]
    }
  },
  methods: {
    // 确定删除
    deleteRow() {
      this.tableData.splice(this.idx, 1)
      this.$message.success('删除成功')
      this.delVisible = false
    },
    addCancel() {
      this.addVisible = false
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