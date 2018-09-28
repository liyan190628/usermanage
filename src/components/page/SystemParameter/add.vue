<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog title="新增" :visible.sync="editVisible" center>
      <el-form :model="userform" label-width="120px" size="small">
        <el-form-item label="pump_type">
          <el-select v-model="userform.region">
            <el-option label="全部" value=""></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="max_voc(v)">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="max_vmp(v)">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="head_factor">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="cable_type">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="pipes_caliber(m)">
          <el-input></el-input>
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
