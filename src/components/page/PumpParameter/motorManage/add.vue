<template>
  <div class="el-common-header">
    <el-dialog title="Add" :visible.sync="addVisible" width="60%">
      <el-form :model="editItems" :rules="rules" ref="editItems" label-width="150px" class="demo-ruleForm">
        <el-form-item label="MotorName:" prop="motorName">
          <el-input v-model="editItems.motorName"></el-input>
        </el-form-item>
        <el-form-item label="Voltage:" prop="voltage">
          <el-input v-model="editItems.voltage"></el-input>
        </el-form-item>
        <el-form-item  prop="voltage2">
          <el-input v-model="editItems.voltage2"></el-input>
        </el-form-item>
        <el-form-item  prop="voltage3">
          <el-input v-model="editItems.voltage3"></el-input>
        </el-form-item>
        <el-form-item label="Current" prop="current">
          <el-input v-model="editItems.current"></el-input>
        </el-form-item>
        <el-form-item prop="current2">
          <el-input v-model="editItems.current2"></el-input>
        </el-form-item>
        <el-form-item label="Motor Efficiency:" prop="motorEfficiency">
          <el-input v-model="editItems.motorEfficiency"></el-input>
        </el-form-item>
        <el-form-item label="Connection standard:" prop="conStandard">
          <el-input v-model="editItems.conStandard"></el-input>
        </el-form-item>
        <el-form-item label="Water temp:" prop="waterTemp">
          <el-input v-model="editItems.waterTemp"></el-input>
        </el-form-item>
        <el-form-item label="Insulation class:" prop="insulationClass">
          <el-input v-model="editItems.insulationClass"></el-input>
        </el-form-item>
        <el-form-item label="Enclosure class:" prop="enclosureClass">
          <el-input v-model="editItems.enclosureClass"></el-input>
        </el-form-item>
        <el-form-item label="Submersion:" prop="submersion">
          <el-input v-model="editItems.submersion"></el-input>
        </el-form-item>
        <el-form-item label="Required cooling flow:" prop="requiredCoolingFlow">
          <el-input v-model="editItems.requiredCoolingFlow"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="cancel">Cancel</el-button>
        <el-button type="primary" @click.native="confirm">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { motorServices } from '@/api/motorServices.js'
export default {
  props: {
    motorId: {
      default: null
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editItems: {
        motorName: '',
        voltage: '',
        voltage2: '',
        voltage3: '',
        current: '',
        current2: '',
        motorEfficiency: '',
        conStandard: '',
        waterTemp: '',
        insulationClass: '',
        enclosureClass: '',
        submersion: '',
        requiredCoolingFlow: ''
      },
      rules: {
        motorName: [{ required: true, message: '请填写用户名', trigger: 'blur' }]
      }
    }
  },
  methods: {
    confirm () {
      this.$refs['editItems'].validate((valid) => {
        if (valid) {
          this.addMotor()
        } else {
          return false;
        }
      })
    },
    async addMotor() { 
      let vm = this.editItems
      let res = await motorServices.getMotorAdd(vm)
      if (res.flag) {
        this.$emit('cancel')
        this.$message.success("添加成功!")
        this.$parent.getTableList()
      } else {
        this.$message.error(res.msg)
      }
    },
    cancel() {
      this.$emit('cancel')
    }
  },
  computed: {
    addVisible: {
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
