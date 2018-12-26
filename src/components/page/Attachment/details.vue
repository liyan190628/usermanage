<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog title="Details" :visible.sync="editVisible" center>
      <el-form :model="userform" label-width="120px" size="small">
        <el-form-item label="productname:">
          <el-input v-model="userform.acceName"></el-input>
        </el-form-item>
        <el-form-item label="suitPump:">
          <el-input v-model="userform.suitPump"></el-input>
        </el-form-item>
        <el-form-item label="orderInformation:">
          <el-input v-for="(items, index) in userform.orderInfos" :key="index" class="mb-18"></el-input>
        </el-form-item>
        <el-form-item label="features:">
          <el-input v-for="(items, index) in userform.featuress" :key="index" class="mb-18"></el-input>
        </el-form-item>
        <el-form-item label="technicalData:">
          <el-input v-for="(items, index) in userform.technicalDatass" :key="index" class="mb-18"></el-input>
        </el-form-item>
        <el-form-item label="dimenWeight:">
          <el-input v-for="(items, index) in userform.dimenWeights" :key="index" class="mb-18"></el-input>
        </el-form-item>
        <el-form-item>
          <img v-if="userform.imageUrl" :src="userform.imageUrl" class="avatar">
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
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
    }
  },
  data () {
    return {
      userform: {
        acceName: '',
        suitPump: '',
        orderInfos: [],
        featuress: [],
        technicalDatas: [],
        dimenWeights: [],
        imageUrl: ''
      }
    }
  },
  methods: {
    saveEdit() {
      this.$emit('saveEdit')
    }
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
