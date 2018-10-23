<template>
  <div>
    <!-- 新增/修改模态框 -->
    <el-dialog title="新增" :visible.sync="editVisible" center>
      <el-form :model="userform" label-width="120px" size="small">
        <el-form-item label="productname:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="suitPump:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="orderInformation:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="features:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="technicalData:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="dimenWeight:">
          <el-input></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="12" :offset="3">
            <div class="grid-content bg-purple">
              <el-upload class="upload-demo" drag action="/api/posts/" multiple>
                <div class="el-upload__text">
                  <i class="el-icon-lx-add"></i>
                  <em>上传图片</em>
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>

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
.upload-demo{
  /* height: 50px;
  line-height: 50px; */
}
</style>
