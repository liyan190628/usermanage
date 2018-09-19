<template>
    <div class="list-content">
        <!-- 搜索 -->
        <!-- <el-card shadow="hover" class="mgb20"> -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline mgb10">
            <el-form-item label="用户名：">
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>
            <el-form-item label="用户权限：">
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>
            <el-form-item label="状态：">
                <el-select v-model="formInline.region">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <!-- </el-card> -->
        <!-- 表格 -->
        <el-card shadow="hover">
            <el-table :data="tableData" class="table" stripe style="width: 100%;">
                <el-table-column prop="date" align="center" label="用户名">
                </el-table-column>
                <el-table-column prop="name" align="center" label="密码">
                </el-table-column>
                <el-table-column prop="address" align="center" label="联系方式">
                </el-table-column>
                <el-table-column prop="email" align="center" label="邮箱">
                </el-table-column>
                <el-table-column prop="address" align="center" label="权限">
                </el-table-column>
                <el-table-column prop="address" align="center" label="当前状态">
                </el-table-column>
                <el-table-column prop="address" align="center" label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button type="text">修改</el-button>
                        <el-button type="text">删除</el-button>
                        <el-button type="text">解锁</el-button>
                        <el-button type="text">授权</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cur_page: 1,
            formInline: {
                user: '',
                region: ''
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '18888888888',
                email: '97620101@qq.com'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '18888888888',
                email: '97620101@qq.com'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '18888888888',
                email: '97620101@qq.com'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '18888888888',
                email: '97620101@qq.com'
            }]
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
        handleCurrentChange(val) {
            this.cur_page = val
            this.getData()
        }
    }
}
</script>
<style scoped>
.list-content{
    background: #fff;
    padding: 20px;
}
.table{
        width: 100%;
        font-size: 14px;
    }
    .title{
        color:#000 !important;
    }
</style>
