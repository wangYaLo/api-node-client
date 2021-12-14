<template>
  <div class="login">
    <div v-show="toSignIn" class="loginbox">
      <div class="title"><h3>Sign in</h3></div>
      <el-form ref="rulesForm" label-width="100px" label-position="left" :model="loginForm" :rules="rulesForm">
        <el-form-item label="Username:" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password:" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <div class="signCheckbox">
          <input class="loginCheckBox" type="checkbox">
          <p>记住密码自动登录</p>
        </div>
        <div class="submitbox" style="margin-top: 60px">
          <el-button type="primary" @click="submitLogin">登录</el-button>
          <el-button @click="submitReset">重置</el-button>
        </div>
        <div class="toPage" >
          <p @click="toSignIn = false">去注册>>></p>
        </div>
      </el-form>
    </div>
    <div v-show="!toSignIn" class="loginbox">
      <div class="title"><h3>Sign up</h3></div>
      <el-form ref="rulesSignUp" label-width="100px" label-position="left" :model="signUpForm" :rules="rulesSignUp">
        <el-form-item label="Username:" prop="username">
          <el-input v-model="signUpForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password:" prop="password">
          <el-input type="password" v-model="signUpForm.password"></el-input>
        </el-form-item>
        <div class="submitbox" style="margin-top: 103px">
          <el-button type="primary" @click="submitSignUp">注册</el-button>
          <el-button @click="submitReset('signUp')">重置</el-button>
        </div>
        <div class="toPage">
          <p  @click="toSignIn = true">返回登录界面>>>></p>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { callbackType, rulesType } from '@/types/element-ui-rules-type';
import { userToSignIn, userToSignUp } from '@/request/api/login'

@Component({
  name: 'login'
})
export default class Login extends Vue {
  loginForm: { username: string; password: string } = {
    username: '',
    password: ''
  };
  signUpForm: { username: string; password: string } = {
    username: '',
    password: ''
  };
  rulesForm: any = {
    username: [
      {
        validator: this.signInValidatorUsername,
        trigger: 'blur'
      }
    ],
    password: [
      {
        validator: this.signInValidatorPassword,
        trigger: 'blur'
      }
    ]
  };
  rulesSignUp: any = {
    username: [
      {
        validator: this.signUpValidatorUsername,
        trigger: 'blur'
      }
    ],
    password: [
      {
        validator: this.signUpValidatorPassword,
        trigger: 'blur'
      }
    ]
  };
  toSignIn: boolean = true;
  $message: any;
  $refs: any;
  mounted(): void {
    const username = window.localStorage.getItem('usernameApi')
    const password = window.localStorage.getItem('passwordApi')
    if (username && password && window.localStorage.getItem('checkedApi') === 'yes') {
      (document.body.querySelector('.loginCheckBox') as any).checked = true
      this.loginForm.username = username
      this.loginForm.password = password
      this.submitLogin()
    }
  }
  submitLogin(): void {
    this.$refs.rulesForm.validate((isOk: boolean, obj: { [x: string]: any }) => {
      if (isOk) {
        const data: { username: string; password: string } = {
          username: this.loginForm.username,
          password: this.loginForm.password
        };
        userToSignIn(data).then((res) => {
          const code = res.data.code
          if (code === 'success') {
            const checked: boolean = (document.body.querySelector('.loginCheckBox') as any).checked
            if (checked) {
              window.localStorage.setItem('checkedApi', 'yes')
              window.localStorage.setItem('usernameApi', this.loginForm.username)
              window.localStorage.setItem('passwordApi', this.loginForm.password)
            }
            this.$router.push('/apicreate')
          }
        })
      } else {
        this.$message({
          message: obj[Object.keys(obj)[0]][0].message as string,
          type: 'error'
        });
      }
    });
  }
  submitSignUp(): void {
    this.$refs.rulesSignUp.validate((isOk: boolean, obj: { [x: string]: any }) => {
      if (isOk) {
        const data: { username: string; password: string } = {
          username: this.signUpForm.username,
          password: this.signUpForm.password
        };
        userToSignUp(data).then((res) => {
          console.log(res);
        })
      } else {
        this.$message({
          message: obj[Object.keys(obj)[0]][0].message as string,
          type: 'error'
        });
      }
    });
  }
  submitReset(value: string = 'signIn'): void {
    if (value === 'signUp') {
      this.signUpForm = {
        username: '',
        password: ''
      };
      this.$refs.rulesSignUp.fields.forEach((item: any) => {
        item.clearValidate()
      })
    } else {
      this.loginForm = {
        username: '',
        password: ''
      };
      this.$refs.rulesForm.fields.forEach((item: any) => {
        item.clearValidate()
      })
    }
  }
  // 登录用户名校验
  signInValidatorUsername(rule: rulesType, value: string, callback: callbackType): void {
    this.loginForm.username = this.loginForm.username.replace(/\s+/g, '');
    if (this.loginForm.username === '') {
      callback(new Error('用户名不能为空'));
    } else {
      callback();
    }
  }
  //登录密码校验
  signInValidatorPassword(rule: rulesType, value: string, callback: callbackType): void {
    this.loginForm.password = this.loginForm.password.replace(/\s+/g, '');
    if (this.loginForm.password === '') {
      callback(new Error('密码不能为空'));
    } else {
      callback();
    }
  }
  // 注册用户名校验
  signUpValidatorUsername(rule: rulesType, value: string, callback: callbackType): void {
    this.signUpForm.username = this.signUpForm.username.replace(/\s+/g, '');
    if (this.signUpForm.username === '') {
      callback(new Error('用户名不能为空'));
    } else {
      callback();
    }
  }
  //注册密码校验
  signUpValidatorPassword(rule: rulesType, value: string, callback: callbackType): void {
    this.signUpForm.password = this.signUpForm.password.replace(/\s+/g, '');
    if (this.signUpForm.password === '') {
      callback(new Error('密码不能为空'));
    } else {
      callback();
    }
  }
}
</script>

<style lang='scss'>
.el-button--primary {
  background-color: #ffcc66 !important;
  border-color: #ffcc66;
  &:hover{
    border: 1px solid #fff;
  }
}
.el-button--default {
  color: #ffffff;
  background: rgba(255,255,255, 0.1) !important;
  border-color: rgba(255,255,255, 0.2);
  &:hover{
    background: rgba(255,255,255, 0.2) !important;
    color: #fff;
  }
}
.el-form-item__label{
  font-size: 18px !important;
  font-weight: 600 !important;
}
.el-input__inner{
  background-color: rgba(255,255,255, 0.1);
  // border: 0;
}
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  // background: url('../../assets/img/dongman.png') no-repeat;
  background-size: cover;
  .loginbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 500px;
    border-radius: 30px;
    margin-left: 100px;
    background: rgba(255,255,255, 0.15);
    .title{
      width: 100%;
      font-size: 24px;
      color: rgba(252,254,242, .7)
    }
    .inputbox {
      display: flex;
    }
    .signCheckbox{
      width: 100%;
      display: flex;
      p{
        margin: 0;
        font-size: 11px;
        text-align: center;
      }
      input{
        opacity: .5;
      }
    }
    .submitbox {
      display: flex;
      justify-content: space-around;
      margin-bottom: 50px;
    }
    .toPage{
      cursor: pointer;
      color: #ffffff;
      p{
        display: inline;
        &:hover{
          text-decoration: underline;
          color: #ffcc66;
        }
      }
    }
  }
}
</style>
