<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'motorManage'"></crumbs>

    <div class="container system-content">
      <!-- 检索条件 -->
      <el-form :inline="true" class="demo-form-inline mgb10">
        <el-form-item label="motorName：">
          <el-input v-model="motorName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getListData" type="primary">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 添加 -->
      <el-row class="pb-20" :gutter="24">
        <el-col :span="2" :offset="22">
          <el-button @click="addVisible = true" type="primary">+add</el-button>
        </el-col>
      </el-row>
      
      <!-- 表格 -->
      <el-card shadow="hover">
        <el-table :data="tableData" class="table" stripe style="width: 100%;">
          <el-table-column prop="motorName" align="center" label="motorName"></el-table-column>
          <!-- 操作 -->
          <el-table-column align="center" label="operate">
            <template slot-scope="scope">
              <el-button @click="handleInfo(scope.$index, scope.row, true)" type="text">details</el-button>
              <el-button @click="handleInfo(scope.$index, scope.row, false)" type="text">edit</el-button>
              <el-button @click="handleDelete(scope.$index, scope.row)" type="text">delete</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </el-card>

    </div>
    <!-- 新增 -->
    <add :width="'150px'" :show='addVisible' @saveEdit="addUser" :items='items' @cancel='addCancel'></add>
    <!-- 查看详情 -->
    <infoModal @confrimInfo='confrimInfo' @saveEdit='saveEditInfo' :show='infoVisible' :form='form'></infoModal>
    <!-- 删除确认弹出框 -->
    <deleteModal :show='delVisible' @cancel='deleteCancel' @deleteRow='deleteRow'></deleteModal>
  </div>
</template>
<script>
import add from '../../modal/addModal'
import edit from '../../modal/editModal' // 编辑
import infoModal from '../../modal/infoModal'
export default {
  components: { edit, add },
  data() {
    return {
      cur_page: 1,
      motorName: '',
      tableData: [],
      editVisible: false, // 编辑
      delVisible: false, // 删除
      authorVisible: false, // 授权
      addVisible: false, // 增加
      items: [
        { title: 'MotorName:', type: '', code: '', vm: 'motorName'},
        { title: 'Voltage:', type: '', code: '', vm: 'voltage' },
        { title: '', type: '', code: '', vm: 'voltage2' },
        { title: '', type: '', code: '', vm: 'voltage3' },
        { title: 'Current:', type: '', code: '', vm: 'current' },
        { title: '', type: '', code: '', vm: 'current2' },
        { title: 'Motor Efficiency:', type: '', code: '', vm: 'motorEfficiency' },
        { title: 'MPPT Efficiency:', type: '', code: '', vm: 'mPPTEfficiency' },
        { title: 'Connection standard:', type: '', code: '', vm: 'conStandard' },
        { title: 'Water temp:', type: '', code: '', vm: 'waterTemp' },
        { title: 'Insulation class:', type: '', code: '', vm: 'insulationClass' },
        { title: 'Enclosure class:', type: '', code: '', vm: 'enclosureClass' },
        { title: 'Submersion:', type: '', code: '', vm: 'submersion' },
        { title: 'Required cooling flow:', type: '', code: '', vm: 'requiredCoolingFlow' },
      ],
      form: {},
      infoVisible: false // 查看详情
    }
  },
  methods: {
    getListData() {
      this.$axios
        .get("/pumpms/motor/queryList", {
          params: {
            motorName: this.motorName,
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
    handleCurrentChange(val) {
      this.cur_page = val
      this.getData()
    },
    handleDelete(index, row) {
      this.idx = index
      this.delVisible = true
    },
    // 编辑
    editCancel() {
      this.editVisible = !this.editVisible
    },
    authorCancel() {
      this.authorVisible = !this.authorVisible
    },
    handleEdit(index, row) {
      this.idx = index
      const item = this.tableData[index]
      this.userform = {
        name: item.name,
        date: item.date,
        address: item.address
      }
      this.editVisible = true
    },
    deleteCancel() {
      this.delVisible = !this.delVisible
    },
    // 确定删除
    deleteRow() {
      this.$axios
        .get("/pumpms/motor/delete", {
          params: {
            motorId: this.tableData[this.idx].motorId
          }
        })
        .then(response => {
          if (response.data.flag) {
            this.delVisible = false
            this.$message("删除成功")
            this.getListData()
          } else {
            this.$message.success(response.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        })
    },
    addUser() {
      let vm = {};
      for (let index of this.items) {
        vm[index.vm] = index.code; 
      }
      this.$axios
        .get("/pumpms/motor/add", {
          params: vm
        })
        .then(response => {
           if (response.data.flag) {
            this.addVisible = false
            this.$message.success("添加成功!")
            this.getListData()
          } else {
            this.$message.success(response.data.msg)
          }
        })
        .catch(response => {
          // console.log(error);
        });
    },
    handleInfo(index, item, isEdit) {
      this.infoVisible = true
      this.form = item
      this.form.isEdit = isEdit
      // console.log(this.form.isEdit)
    },
    saveEditInfo () {
      // this.infoVisible = false
      console.log(this.form)
    },
    confrimInfo () {
      this.infoVisible = false
    }
  },
  created() {
    this.getListData()
  },
}
</script>
