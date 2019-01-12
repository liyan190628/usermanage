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
      <!-- <el-card shadow="hover"> -->
      <el-table border :data="tableData" class="table" stripe style="width: 100%;">
          <el-table-column fixed="left" label="序号" type="index" align="center" width="50"/>
          <el-table-column prop="stName" align="center" label="standarsName">
          </el-table-column>
          <el-table-column prop="stExplain" align="center" label="standarsExplain">
            <!-- <template slot-scope="scope">
              <div v-for="(item, index) in scope.row.stExplain" :key="index">
                {{item}}
              </div>
            </template> -->
          </el-table-column>
          <el-table-column prop="stPicPath" align="center" label="standarsPicture">
          </el-table-column>
          <el-table-column align="center" label="operate">
            <template slot-scope="scope">
              <el-button @click="handleDelete(scope.row.stId)" type="text">Delete</el-button>
              <el-button @click="handleEdit(scope.row.stId)" type="text">Edit</el-button>
              <el-button @click="handleEdit(scope.row.stId)" type="text">导出pdf</el-button>
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
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      <!-- </el-card> -->
    </div>
    <!-- 新增模态框 -->
    <addStandards @cancel='addCancel' :show='addVisible'></addStandards>
    <editStandards :stId='stId' @cancel='editCancel' :show='editVisible'></editStandards>
  </div>
</template>
<script>
import addStandards from './addStandards'
import editStandards from './editStandards'
import { standardService } from '@/api/standards.js'
export default {
  components: { addStandards, editStandards},
  data() {
    return {
      formInline: {
        stName: ''
      },
      tableData: [],
      editVisible: false, // 编辑
      addVisible: false, // 增加
      items: [
        { title: 'standarsName', type: '', code: '' },
        { title: 'standarsExplain', type: '', code: '' },
        { title: 'standarsPicture', type: '', code: '' }
      ],
      standarsName: '',
      cur_page: 1,
      rows: 10,
      total: 10,
      editForm: {},
      stName: '',
      stId: ''
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
    async getTableList () {
      let vm = {
        stName: this.formInline.stName,
        page: this.cur_page,
        rows: this.rows
      }
      let res = await standardService.getList(vm)
      this.tableData = res.rows
      this.tableData.forEach(v=> {
        v.stExplain.split(',')
      })
      this.total = res.total
    },
    handleEdit(id) {
      this.editVisible = true
      this.stId = id
    }
  },
  mounted() {
    this.getTableList()
  }
}
</script>
