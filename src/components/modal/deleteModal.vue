<template>
  <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
    <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="deleteRow">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    delVisible: {
      get() {
        return this.show
      },
      set(n) {
        this.$emit('cancel')
      }
    }
  },
  methods: {
    deleteRow() {
      this.$emit('deleteRow')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
