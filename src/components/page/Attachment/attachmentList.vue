<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'附件管理'" :title2="'附件列表'"></crumbs>
    <div class="container mgb10">
      <!-- 查询 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="productName:">
          <el-input v-model="formInline.productName"></el-input>
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
        <el-table-column prop="acceName" align="center" label="productName">
        </el-table-column>
        <el-table-column prop="operate" align="center" label="operate" width="180">
          <template slot-scope="scope">
            <el-button @click="handleDetails(scope.$index, scope.row)" type="text">详情</el-button>
            <el-button @click="handleEdit(scope.row)" type="text">修改</el-button>
            <el-button @click="handleDelete(scope.$index, scope.row)" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
    <!-- 详情 -->
    <info :userform='detailsForm' @saveEdit='detailsConfirm' :show="detailsShow"></info>
    <!-- 修改模态框 -->
    <edit :show='editVisible' :userform='EditFrom' @cancel='editCancel'></edit>
    <!-- 删除模态框 -->
    <deleteModal :show='delVisible' @cancel='deleteCancel' @deleteRow='deleteRow'></deleteModal>
    <!-- 增加附件 -->
    <addAttachment :show='addVisible' :items='items' :userform='editform' @cancel='addCancel'></addAttachment>

  </div>
</template>
<script>
import addAttachment from './addAttachment'
import info from './details'
import edit from './edit'
export default {
  components: { addAttachment, info, edit },
  data() {
    return {
      formInline: {
        productName: ''
      },
      tableData: [],
      detailsShow: false, // 详情
      editVisible: false, // 修改模态框
      delVisible: false, // 删除
      addVisible: false, // 增加
      editform: {}, // 编辑
      detailsForm: {},
      cur_page: 1,
      rows: 10,
      items: [],
      EditFrom: {}
    }
  },
  methods: {
    handleDelete (index) {
      this.idx = index
      this.delVisible = true
    },
    handleEdit(item) {
      // console.log(1)
      this.editVisible = true
      this.EditFrom = item
    },
    // 确定删除
    deleteRow() {
      this.$axios
        .get("/pumpms/accessory/delete", {
          params: {
            acceId: this.tableData[this.idx].acceId
          }
        })
        .then(res => {
           if (res.data.flag) {
            this.delVisible = false
            this.$message("删除成功")
            this.getTableList()
          } else {
            this.$message.success(response.data.msg)
          }
        })
        .catch(function(error) {
        });
    },
    addCancel() {
      this.addVisible = false
    },
    handleDetails (index, item) {
      this.detailsShow = true
    },
    detailsConfirm () {
      this.detailsShow = false
    },
    getTableList () {
      let params = {
        productName: this.formInline.productName,
        page: this.cur_page,
        rows: this.rows
      }
      this.$axios
        .get("/pumpms/accessory/queryList", {
          params: params
        })
        .then(res => {
           this.tableData = res.data.rows
        })
        .catch(function(error) {
        });
    },
     // 添加用户
    addAttachment() {
      let vm = {};
      for (let index of this.formItems) {
        vm[index.vm] = index.code;
      }
      this.$axios
        .get("/pumpms/accessory/add", {
          params: vm
        })
        .then(response => {
           if (response.data.flag) {
            this.addVisible = false
            this.$message.success("添加成功!")
            this.getUserList()
          } else {
            this.$message.success(response.data.msg)
          }
        })
        .catch(response => {
          // console.log(error);
        });
    }
  },
  created() {
    this.getTableList()
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