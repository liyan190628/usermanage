<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'泵参数管理'" :title2="'standardsManage'"></crumbs>

    <div class="container system-content">
      <!-- 检索条件 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="standarsName：">
          <el-input v-model="formInline.stName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getTableList" type="primary">query</el-button>
          <el-button @click="addVisible = true" type="primary">add</el-button>
        </el-form-item>
      </el-form>

      <el-card shadow="hover">
        <el-table :data="tableData" class="table" stripe style="width: 100%;">
          <el-table-column prop="stName" align="center" label="standarsName">
          </el-table-column>
          <el-table-column prop="stExplain" align="center" label="standarsExplain">
          </el-table-column>
          <el-table-column prop="stPicPath" align="center" label="standarsPicture">
          </el-table-column>
          <el-table-column align="center" label="operate">
            <template slot-scope="scope">
              <el-button @click="handleDelete(scope.row.stId)" type="text">delete</el-button>
            </template>
          </el-table-column>
        </el-table>
         <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="cur_page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="rows"
            layout="sizes, prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </el-card>

    </div>
    <!-- 新增模态框 -->
    <addStandards @cancel='addCancel' :show='addVisible'></addStandards>
    <!-- 编辑用户 -->
    <edit @cancel='editCancel' :show='editVisible' :items='items'></edit>
  </div>
</template>
<script>
import addStandards from './addStandards'
import edit from '../../modal/editModal' // 编辑
export default {
  components: { edit, addStandards},
  data() {
    return {
      formInline: {
        stName: ''
      },
      tableData: [],
      editVisible: false, // 编辑
      authorVisible: false, // 授权
      addVisible: false, // 增加
      items: [
        { title: 'standarsName', type: '', code: '' },
        { title: 'standarsExplain', type: '', code: '' },
        { title: 'standarsPicture', type: '', code: '' }
      ],
      standarsName: '',
      cur_page: 1,
      rows: 10,
      total: 10
    }
  },
  methods: {
    handleSizeChange(val) {
      this.rows = val
      this.getTableList()
    },
    handleCurrentChange (val) {
      this.cur_page = val
      this.getTableList()
    },
    handleDelete(id) { // 删除用户
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios
          .get("/pumpms/standard/delete", {
            params: {stId: id}
          })
          .then(response => {
            if (response.data.flag) {
              this.delVisible = false
              this.$message.success("删除成功")
              this.getTableList()
            } else {
              this.$message.success(response.data.msg)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
        });          
      });
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
    getTableList () {
      this.$axios
        .get("/pumpms/standard/queryList", {
          params: {
            stName: this.formInline.stName,
            page: this.cur_page,
            rows: 10
          }
        })
        .then(response => {
          this.tableData = response.data.rows;
        })
    }
  },
  mounted() {
    this.getTableList()
  }
}
</script>
