<template>
  <div>
    <!-- 编辑弹出框 -->
    <el-dialog center title="edit" :visible.sync="editVisible" width="30%">
      <el-form label-width="150px">
        <el-form-item label="role：">
          <el-select :size="'medium'" v-model="roleId">
            <el-option v-for="(item, index) in userform" :key="index" :label="item.roleName" :value="item.roleId"></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center">
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="saveEdit">confirm</el-button>
      </el-row>
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
    userId: null
  },
  data() {
    return {
      userform: {},
      roleId: ''
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    saveEdit() {
      this.$axios
        .get("/pumpms/customer/accredit", {
          params: {
            userId: this.userId,
            roleId: this.roleId
          }
        })
        .then(response => {
          console.log(response)
        })
        .catch(response => {
          // console.log(error);
        });
    },
    queryRole () {
      this.$axios
        .get("/pumpms/role/queryRoles", {
          // params: 
        })
        .then(response => {
          this.userform = response.data
        })
        .catch(response => {
          // console.log(error);
        });
    }
  },
  created() {
    this.queryRole() 
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
.el-input__inner{
  width: 200px;
}
</style>
