<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="userName">
          <el-input
            v-model="ruleForm.userName"
            placeholder="userName"
          >
            <el-button
              slot="prepend"
              icon="el-icon-lx-people"
            ></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button
              slot="prepend"
              icon="el-icon-lx-lock"
            ></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button
            type="warning"
            @click="submitForm('ruleForm')"
          >登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data: function() {
    return {
      ruleForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post('/pumpms/user/login', qs.stringify(this.ruleForm))
            .then(res => {
              if (res.data.falg) {
                this.$message.success('登陆成功！')
                if (res.data.date.userType === '1') {
                  this.$router.push('/userManagement')
                } else {
                  this.$router.push('/mainQueryPage')
                }
              } else {
                this.$message.error(res.data.msg)
              }
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/bg1.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>