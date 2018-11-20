<template>
  <div>
    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form :model="userform" label-width="80px">
        <el-form-item label="用户名">
          <el-input type="date" placeholder="选择日期" v-model="userform.date"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userform.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="userform.address"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userform.address"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="userform.address">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前状态">
          <el-input v-model="userform.address"></el-input>
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </el-row>
    </el-dialog>

  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    userform: {
      type: Object,
      default: {}
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    saveEdit() { }
  },
  computed: {
    editVisible: {
      get() {
        return this.show
      },
      set(n) {
        this.$emit('cancel', n)
      }
    }
  }
}
</script>
