<template>
  <div>
    <!-- 编辑弹出框 -->
    <el-dialog center title="编辑" :visible.sync="editVisible" width="30%">
      <el-form :model="userform" label-width="150px">
        <el-form-item label="角色：">
          <el-select :size="'medium'" v-model="userform.address">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center">
        <el-button type="primary" @click="saveEdit">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
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
    }
    // userform: {
    //   type: Object,
    //   default: {}
    // }
  },
  data() {
    return {
      userform: {}
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
<style scoped>
.el-input__inner{
  width: 200px;
}
</style>
