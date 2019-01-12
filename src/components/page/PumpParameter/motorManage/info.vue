<template>
  <div class="el-common-header">
    <el-dialog title="Add" :visible.sync="addVisible" width="60%">
      <el-form :model="editItems" ref="editItems" label-width="150px" class="demo-ruleForm">
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
        <el-button type="primary" @click.native="cancel">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { motorServices } from '@/api/motorServices'
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
      }
    }
  },
  methods: {
    cancel() { this.$emit('cancel')},
    async getMotorDetail () {
      let vm = {
        motorId: this.motorId
      }
      let res = await motorServices.getMotorDetail(vm)
      console.log(res)
      this.editItems = res
    }
  },
  mounted() {
    if(this.motorId) this.getMotorDetail()
  },
  watch: {
    motorId (n) {
      this.getMotorDetail()
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
