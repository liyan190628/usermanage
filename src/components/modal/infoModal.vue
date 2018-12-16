<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog title="info" :visible.sync="infoVisible" center>
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="motorName:">
          <el-input :disabled="form.isEdit" v-model="form.motorName"></el-input>
        </el-form-item>
        <el-form-item label="voltage:">
          <el-input :disabled="form.isEdit" v-model="form.voltage"></el-input>
        </el-form-item>
         <el-form-item>
          <el-input :disabled="form.isEdit" v-model="form.voltage2"></el-input>
        </el-form-item>
        <el-form-item label="current:">
          <el-input :disabled="form.isEdit" v-model="form.current"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :disabled="form.isEdit" v-model="form.current2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :disabled="form.isEdit" v-model="form.current3"></el-input>
        </el-form-item>
        <el-form-item label="motorEfficiency:">
          <el-input :disabled="form.isEdit" v-model="form.motorEfficiency"></el-input>
        </el-form-item>
        <el-form-item label="mPPTEfficiency:">
          <el-input :disabled="form.isEdit" v-model="form.mPPTEfficiency"></el-input>
        </el-form-item>
        <el-form-item label="conStandard:">
          <el-input :disabled="form.isEdit" v-model="form.conStandard"></el-input>
        </el-form-item>
        <el-form-item label="waterTemp:">
          <el-input :disabled="form.isEdit" v-model="form.waterTemp"></el-input>
        </el-form-item>
        <el-form-item label="insulationClass:">
          <el-input :disabled="form.isEdit" v-model="form.insulationClass"></el-input>
        </el-form-item>
        <el-form-item label="enclosureClass:">
          <el-input :disabled="form.isEdit" v-model="form.enclosureClass"></el-input>
        </el-form-item>
         <el-form-item label="submersion:">
          <el-input :disabled="form.isEdit" v-model="form.submersion"></el-input>
        </el-form-item>
        <el-form-item label="requiredCoolingFlow:">
          <el-input :disabled="form.isEdit" v-model="form.requiredCoolingFlow"></el-input>
        </el-form-item>
      </el-form>
      <span v-if="form.isEdit" slot="footer" class="dialog-footer">
        <el-button @click="confrimInfo" type="primary">confirm</el-button>
      </span>
      <span v-else slot="footer" class="dialog-footer">
         <el-button @click="confrimInfo" type="primary">cancel</el-button>
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
    form: {
      type: Object,
      default: {}
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    saveEdit() {
      this.$emit('saveEdit')
    },
    confrimInfo () {
      this.$emit('confrimInfo')
    }
  },
  computed: {
    infoVisible: {
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
