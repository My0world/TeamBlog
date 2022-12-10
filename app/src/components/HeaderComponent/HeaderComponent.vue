<template>
  <div class="HeaderComponent" id="nav">
    <div class="container">
      <!-- 导航条 -->
      <ul>
        <router-link to="/home">首页</router-link>
        <router-link to="/page">文章</router-link>
        <router-link to="/picture">图片集</router-link>
        <router-link to="/team">团队信息</router-link>
      </ul>
      <!-- 搜索框 -->
      <div class="search">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button @click="goSearch" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HeaderComponent",
  data() {
    return {};
  },
  computed: {
    //获取时间
  },
  watch: {},
  components: {},
  methods: {
    //导航滚动事件
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop < 500) {
        document.getElementById("nav").style.background =
          "rgba(51, 51, 51, 0.2)";
      } else {
        document.getElementById("nav").style.background = "rgba(51, 51, 51, 1)";
      }
    },

    //前往搜索页
    goSearch(){
      this.$router.push({path:"/search"})
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>


<!-- ElementUI修改的地方 -->
<style>
/* 搜索框 */
.el-input__inner {
  width: 144px;
  height: 35px;
}
</style>

<!-- 自己样式修改 -->
<style lang="less" scoped>
.HeaderComponent {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  background: rgba(51, 51, 51, 0.2);
  .container {
    width: 1903px;
    height: 47px;
    margin: auto;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;

    //导航
    ul {
      width: 640px;
      height: 47px;
      float: left;
      display: flex;
      align-items: center;

      a {
        float: left;
        display: block;
        text-align: center;
        margin: 0 30px;
        width: 100px;
        height: 37px;
        line-height: 37px;
        color: white;
        font-size: 20px;
        font-weight: 520;
        text-decoration: none;
        transition-duration: 0.1s;
      }
      a:hover {
        color: #cd5360;
      }
    }
    .search{
      width: 1475px;
      display: flex;
      justify-content: flex-end;
    }
    .input-with-select {
      margin-right: 70px;
      width: 150px;
    }
  }
}
</style>

