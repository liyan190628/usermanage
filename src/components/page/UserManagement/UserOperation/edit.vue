<template>
  <div>
    <!-- 编辑弹出框 -->
    <el-dialog title="edit" :visible.sync="editVisible" width="30%">
      <el-form :model="userform" label-width="80px">
        <el-form-item label="userName:">
          <el-input v-model="userform.userName"></el-input>
        </el-form-item>
        <el-form-item label="password:">
          <el-input v-model="userform.password"></el-input>
        </el-form-item>
        <el-form-item label="phone:">
          <el-input v-model="userform.phone"></el-input>
        </el-form-item>
        <el-form-item label="email:">
          <el-input v-model="userform.email"></el-input>
        </el-form-item>
        <el-form-item label="userType:">
          <el-input v-model="userform.userType"></el-input>
        </el-form-item>
        <el-form-item label="isLock：">
          <el-select v-model="userform.isLock">
            <el-option label="锁定" value="Y"></el-option>
            <el-option label="未锁定" value="N"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center">
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="saveEdit">confirm</el-button>
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
