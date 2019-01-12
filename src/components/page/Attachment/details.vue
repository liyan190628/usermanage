<template>
  <!-- 新增/修改模态框 -->
  <el-dialog title="Details" :visible.sync="editVisible" center>
    <el-form :model="userform" label-width="120px" size="small">
      <el-form-item label="productname:">
        <el-input disabled v-model="userform.acceName"></el-input>
      </el-form-item>
      <el-form-item label="suitPump:">
        <el-input disabled v-model="userform.suitPump"></el-input>
      </el-form-item>
      <el-form-item v-for="(item, index) in userform.orderInfos" :key='item.value' :label="index < 1 ? 'orderInformations:' : ''">
        <el-input disabled v-model="item.value"></el-input>
      </el-form-item>
      <el-form-item v-for="(item, index) in userform.featuress" :key='item.value' :label="index < 1 ? 'features:' : ''">
        <el-input disabled v-model="item.value"></el-input>
      </el-form-item>
      <el-form-item v-for="(item, index) in userform.technicalDatas" :key='item.value' :label="index < 1 ? 'technicalDatas:' : ''">
        <el-input disabled v-model="item.value"></el-input>
      </el-form-item>
      <el-form-item v-for="(item, index) in userform.dimenWeights" :key='item.value' :label="index < 1 ? 'dimenWeights:' : ''">
        <el-input disabled v-model="item.value"></el-input>
      </el-form-item>
      <el-form-item>
        <img v-if="userform.imageUrl" :src="userform.imageUrl" class="avatar">
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="saveEdit" type="primary">confirm</el-button>
    </span>
  </el-dialog>
</template>
<script>
    import {
        accessoryServices
    } from "@/api/accessoryServices"
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            acceId: {
                default: null
            }
        },
        data() {
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
            },
            async getDetail(acceId) {
                let vm = {
                    acceId: acceId
                }
                let res = await accessoryServices.getAccessoryDetail(vm)
                this.userform = {
                    acceName: res.acceName,
                    suitPump: res.suitPump,
                    orderInfos: [],
                    featuress: [],
                    technicalDatas: [],
                    dimenWeights: [],
                    imageUrl: res.imageUrl
                }
                if (res.orderInfos) {
                  res.orderInfos.forEach(v => {
                    this.userform.orderInfos.push({value: v})
                  })
                }
                if (res.featuress) {
                  res.featuress.forEach(v => {
                    this.userform.featuress.push({value: v})
                  })
                }
                if (res.technicalDatas) {
                  res.technicalDatas.forEach(v => {
                    this.userform.technicalDatas.push({value: v})
                  })
                }
                if (res.dimenWeights) {
                  res.dimenWeights.forEach(v => {
                    this.userform.dimenWeights.push({value: v})
                  })
                }
            }
        },
        computed: {
            editVisible: {
                get() {
                    return this.show
                },
                set(n) {
                    this.$emit('saveEdit', n)
                }
            }
        },
        watch: {
            acceId(n) {
                this.getDetail(n)
            }
        }
    }
</script>
<style scoped>
    .el-select {
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
        border-color: #409eff;
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
