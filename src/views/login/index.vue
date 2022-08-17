<template>
  <div class="login-container">
    <div class="content">
      <div class="title-container">
        <h3 class="title">
          <img src="../../assets/login/logo.png" alt="">
        </h3>
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

        <el-form-item prop="username">
          <span class="svg-container">
            <span
              class="el-icon-mobile-phone"
            />
          </span>
          <el-input
            ref="username"
            v-model.trim="loginForm.username"
            placeholder="请输入账号"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <span class="el-icon-lock" style="font-size:16px" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model.trim="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <span :class="passwordType === 'password' ? 'el-icon-turn-off' : 'el-icon-open'" />
          </span>
        </el-form-item>

        <el-form-item>
          <span class="svg-container">
            <span class="el-icon-paperclip" />
          </span>
          <el-input

            placeholder="请输入验证码"

            tabindex="2"
            auto-complete="on"
          >
            <template #suffix>
              <el-image :src="codeImgUrl" />
            </template>
          </el-input>

        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="login">登录</el-button>

      </el-form>
    </div>
  </div>
</template>

<script>
import { validPasswordLength, validUsernameLength } from '@/utils/validate'
import { code } from '@/api/user'
export default {
  name: 'Login',
  data() {
    const validPasswordLength1 = (rule, value, callback) => {
      if (validPasswordLength(value)) {
        return callback
      } else {
        return callback(new Error('密码长度必须是6-18位'))
      }
    }
    const validUsernameLength1 = (rule, value, callback) => {
      if (validUsernameLength(value)) {
        return callback
      } else {
        return callback(new Error('账户名长度必须是6-18位'))
      }
    }
    return {
      loginForm: {
        username: 'admin123',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, message: '账号必填', trigger: 'blur' },

          { validator: validUsernameLength1, trigger: 'blur' }],
        password: [{ required: true, message: '密码必填', trigger: 'blur' },
          { validator: validPasswordLength1, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      codeImgUrl: ''
    }
  },
  created() {
    this.getCode()
    // console.log(res)
    // await request.get('/api/user-service/user/imageCode/:clientToken', { reponseType: 'Image' }).then(reponse => {
    //   this.dynamicImage = window.URL.createObjectURL(reponse.data)
    // })
  },

  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async getCode() {
      const res = await code()
      const blob = res.data
      this.codeImgUrl = window.URL.createObjectURL(blob)
      console.log(res)
    },
    login() {

    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #9d9d9d;
      height: 47px;
      caret-color: #000;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $cursor inset !important;
        -webkit-text-fill-color: #9d9d9d !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid #e3e3e3;
    // background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  // background-color: $bg;
  overflow: hidden;
  background-image: url('../../assets/login/login-bg.png');
  background-size: cover;
  position: relative;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
  .login-form {

    width: 518px;
    height: 388px;
    max-width: 100%;
    padding: 76px 35px 0;
    margin: 0 auto;
    // overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;

  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      // position:absolute;
      // left: 50%;
      // top: 50%;
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto -48px auto;
      text-align: center;
      font-weight: bold;
      width: 96px;
      height: 96px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.el-image {
  transform: translateX(42px);
  height: 52px;
}
</style>
