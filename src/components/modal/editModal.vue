<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" center>
      <el-form :model="userform" label-width="120px" size="small">
        <el-form-item v-for="(item, index) in items" :key="index" :label="item.title">
          <el-select v-if="item.type === 'select'" v-model="userform.region">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-input v-else></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button @click="saveEdit" type="primary">确 认</el-button>
      </span>
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
    },
    items: {
      type: Array,
      default: []
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
.el-select{
  width: 100%;
}
</style>
