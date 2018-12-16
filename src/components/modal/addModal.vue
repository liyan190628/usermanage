<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog title="add" width="50%" :visible.sync="editVisible" center>
      <el-form :label-width="width" :size="'samll'">
        <el-form-item v-for="(item, index) in items" :key="index" :label="item.title">
          <el-select v-if="item.type === 'select'" v-model="item.code">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-input v-model="item.code" v-else></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">cancel</el-button>
        <el-button @click="saveEdit" type="primary">confirm</el-button>
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
    items: {
      type: Array,
      default: []
    },
    width: {
      type: String,
      default: '120px'
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    saveEdit() {this.$emit('saveEdit') }
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
  },
  created () {
    
  }
}
</script>
<style scoped>
.el-select{
  width: 100%;
}
</style>
