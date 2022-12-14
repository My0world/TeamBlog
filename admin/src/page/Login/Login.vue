<template>
  <div class="Login">
    <div class="title">博客个人中心管理系统</div>
    <div class="main">
      <div class="loginForm">
        <el-input v-model="loginForm.stuId" placeholder="请输入账号"></el-input>
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          show-password
        ></el-input>
      </div>
      <div class="LoginBtn">
        <el-button @click="goLogin" type="success">登录</el-button>
      </div>
    </div>
    <div v-show="false">{{getMineAllData(loginData.data)}}</div>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        password: "",
        stuId: "",
      },
      minedata:{}
    };
  },
  computed: {
    loginData(){
      return this.$store.state.Login;
    }
  },
  components: {},
  methods: {
    goLogin() {
      this.loginForm.stuId = parseInt(this.loginForm.stuId);
      this.$store.dispatch("Login/login", this.loginForm);
    },
    getMineAllData(v){
      if(v==="登陆成功"){
        this.$store.dispatch("Mine/getData", this.loginForm.stuId);
        this.$store.dispatch("Mine/getUser", this.loginForm.stuId);
        sessionStorage.setItem("stuId", this.loginForm.stuId);
        this.$router.push({
          name:"个人信息"
        })
      }
    }
  },
  mounted() {},
};
</script>


<style lang="less" scoped>
.Login {
  height: 100vh;
  background: rgb(190, 228, 240);
  .title {
    padding-top: 170px;
    font-size: 27px;
    text-align: center;
  }
  .main {
    margin: 50px auto;
    width: 600px;
    height: 400px;
    background: #f2f6fc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .loginForm {
      width: 300px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .LoginBtn {
      margin-top: 30px;
      width: 70px;
      height: 25px;
    }
  }
}
</style>

