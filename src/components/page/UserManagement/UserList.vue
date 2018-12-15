<template>
  <div>
    <!-- 面包屑导航 -->
    <crumbs :title1="'用户管理'" :title2="'用户列表'"></crumbs>
    <!-- 搜索 -->
    <div class="container">
      <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
        <el-form-item label="用户名：">
          <el-input v-model="formInline.userName"></el-input>
        </el-form-item>
        <el-form-item label="角色：">
          <el-input v-model="formInline.userType"></el-input>
        </el-form-item>
        <el-form-item label="状态：">
          <el-select v-model="formInline.isLock">
            <el-option label="全部" value=""></el-option>
            <el-option label="锁定" value="Y"></el-option>
            <el-option label="未锁定" value="N"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUserList">查询</el-button>
        </el-form-item>
      </el-form>
      <el-row type="flex" class="row-bg pb-20" justify="end">
        <el-col :span="2">
          <el-button type="primary" @click="addVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-card shadow="hover">
        <el-table :data="tableData" class="table" stripe style="width: 100%;">
          <el-table-column prop="userName" align="center" label="用户名"></el-table-column>
          <el-table-column prop="password" align="center" label="密码"></el-table-column>
          <el-table-column prop="phone" align="center" label="联系方式"></el-table-column>
          <el-table-column prop="email" align="center" label="邮箱"></el-table-column>
          <el-table-column prop="userType" align="center" label="权限"></el-table-column>
          <el-table-column prop="isLock" align="center" label="当前状态"></el-table-column>
          <el-table-column prop="operation" align="center" label="操作" width="200">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.$index, scope.row)" type="text">编辑</el-button>
              <el-button @click="handleDelete(scope.$index)" type="text">删除</el-button>
              <el-button type="text">解锁</el-button>
              <el-button @click="handleAuthor(scope.$index)" type="text">授权</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="1000"
          ></el-pagination>
        </div>
      </el-card>
    </div>
    <!-- 添加用户 -->
    <addModal @cancel='addCancel' @saveEdit="addUser" :show="addVisible" :items="addItems"></addModal>
    <!-- 编辑用户 -->
    <edit @cancel="editCancel" @saveEdit='saveEdit' :show="editVisible" :userform="userform"></edit>
    <!-- 删除用户 -->
    <deleteModal :show="delVisible" @cancel="deleteCancel" @deleteRow="deleteRow"></deleteModal>
    <!-- 授权 -->
    <authorization :userId='userId' :show="authorVisible" @cancel="authorCancel"></authorization>
  </div>
</template>
<script>
import edit from "./UserOperation/edit"; // 编辑
import authorization from "./UserOperation/authorization"; // 授权
export default {
  components: { edit, authorization },
  data() {
    return {
      formInline: {
        userName: "",
        userType: "",
        isLock: ""
      },
      tableData: [
        {userName: '测试'}
      ],
      addVisible: false, // 添加
      editVisible: false, // 编辑
      delVisible: false, // 删除
      authorVisible: false, // 授权
      userform: {},
      addItems: [
        { title: "userName:", type: "input", code: "", vm: "userName" },
        { title: "password:", type: "input", code: "", vm: "password" },
        { title: "email:", type: "input", code: "", vm: "email" },
        { title: "address:", type: "input", code: "", vm: "address" },
        { title: "phone:", type: "input", code: "", vm: "phone" }
      ],
      idx: -1,
      cur_page: 1, // 当前页
      rows: 10,
      userId: ''
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.cur_page = val;
    },
    handleDelete(index, row) {
      this.idx = index;
      this.delVisible = true;
    },
    addCancel () {
      this.addVisible = !this.addVisible
    },
    handleAuthor (index) {
      this.authorVisible = !this.authorVisible
      this.userId = this.tableData[index].userId
    },
    // 编辑
    editCancel() {
      this.editVisible = !this.editVisible;
    },
    authorCancel() {
      this.authorVisible = !this.authorVisible;
    },
    handleEdit(index, row) {
      this.idx = index;
      const item = this.tableData[index];
      this.userform = {
        userName: item.userName,
        password: item.password,
        phone: item.phone,
        email: item.email,
        userType: item.userType,
        isLock: item.isLock,
        userId: item.userId
      };
      this.editVisible = true
    },
    deleteCancel() {
      this.delVisible = !this.delVisible;
    },
    // 确定删除
    deleteRow() {
      this.$axios
        .get("/pumpms/customer/delete", {
          params: {
            userId: this.tableData[this.idx].userId
          }
        })
        .then(response => {
          if (response.data.flag) {
            this.delVisible = false
            this.$message("删除成功")
            this.getUserList()
          } else {
            this.$message.success(response.data.msg)
          }
        })
        .catch(error => {
          // console.log(error);
        })
    },
    // 获取用户列表
    getUserList() {
      this.$axios
        .get("/pumpms/customer/queryList", {
          params: {
            userName: this.formInline.userName,
            userType: this.formInline.userType,
            isLock: this.formInline.isLock,
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
    // 添加用户
    addUser() {
      let vm = {};
      for (let index of this.addItems) {
        vm[index.vm] = index.code;
      }
      this.$axios
        .get("/pumpms/customer/add", {
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
    },
    saveEdit() { 
      this.$axios
        .get("/pumpms/customer/edit", {
          params: this.userform
        })
        .then(response => {
          if (response.data.flag) {
            this.editVisible = false
            this.getUserList()
          }else {
            this.$message.success(response.data.msg)
          }
        })
        .catch(function(error) {
          // this.$message('这是一条消息提示');
        });
    }
  },
  created() {
    this.getUserList()
  }
};
</script>
