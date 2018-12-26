<template>
  <div>
    <el-dialog title="Add" :visible.sync="editVisible">
      <el-form :model="addForm" :rules="rules" :ref="addForm" label-width="120px" size="small">
        <el-form-item label="pump_type">
          <el-input></el-input>
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
        <el-button @click="cancel">cancel</el-button>
        <el-button @click="addConfirm" type="primary">confirm</el-button>
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
    }
  },
  data () {
    return {
      addForm: {},
      rules: {}
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    addConfirm() { }
  },
  computed: {
    editVisible: {
      get() {
        return this.show
      },
      set(n) {
        // this.$emit('cancel', n)
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
