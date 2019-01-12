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
          <el-button type="primary">query</el-button>
          <el-button @click="addVisible = !addVisible" type="primary">add</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table border :data="tableData" stripe style="width: 100%;margin-top: 30px;">
        <el-table-column fixed="left" label="序号" type="index" align="center" width="50"/>
        <el-table-column prop="acceName" align="center" label="productName">
        </el-table-column>
        <el-table-column prop="suitPump" align="center" label="suitPump"></el-table-column>
        <el-table-column fixed="right" width="300" prop="operate" align="center" label="operate">
          <template slot-scope="scope">
            <el-button @click="handleDetails(scope.row.acceId)" type="text">detail</el-button>
            <el-button @click="handleEdit(scope.row.acceId)" type="text">edit</el-button>
            <el-button @click="handleDelete(scope.row.acceId)" type="text">delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="cur_page" :page-sizes="[10, 20, 30, 40]" :page-size="rows" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
      </div>
    </div>

    <!-- 详情 -->
    <accessDetails :show="detailsShow" :acceId='acceId' @saveEdit='detailsConfirm'></accessDetails>
    <!-- 修改模态框 -->
    <edit :show='editVisible' :acceId='acceId' @cancel='editCancel'></edit>
    <!-- 增加附件 -->
    <addAttachment :show='addVisible' @cancel='addCancel'></addAttachment>

  </div>
</template>
<script>
    import {
        accessoryServices
    } from '@/api/accessoryServices'
    import addAttachment from './addAttachment'
    import accessDetails from './details'
    import edit from './edit'
    export default {
        components: {
            addAttachment,
            accessDetails,
            edit
        },
        data() {
            return {
                formInline: {
                    productName: ''
                },
                tableData: [],
                detailsShow: false, // 详情
                editVisible: false, // 修改模态框
                addVisible: false, // 增加
                items: [],
                EditFrom: {},
                cur_page: 1, // 当前页
                rows: 10,
                total: 10,
                acceId: ''
            }
        },
        methods: {
            handleDelete(id) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    })
                    .then(() => {
                        this.accessoryDelete(id)
                    })
                    .catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        })
                    })
            },
            async accessoryDelete(id) {
                let vm = {
                    acceId: id
                }
                let res = await accessoryServices.getAccessoryDelete(vm)
                if (res.flag) {
                    this.delVisible = false
                    this.$message.success('删除成功')
                    this.getTableList()
                } else {
                    this.$message.error(res.msg)
                }
            },
            handleEdit(id) {
                this.editVisible = true
                this.acceId = id
            },
            handleDetails(id) { // 详情
                this.detailsShow = true
                this.acceId = id
            },
            detailsConfirm() {
                this.detailsShow = false
            },
            async getTableList() {
                let params = {
                    productName: this.formInline.productName,
                    page: this.cur_page,
                    rows: this.rows
                }
                let res = await accessoryServices.getAccessoryList(params)
                console.log(res)
                this.tableData = res.rows
                this.total = res.total
            }
        },
        mounted() {
            this.getTableList()
        }
    }
</script>
