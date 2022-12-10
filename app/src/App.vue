<template>
  <div class="App">
    <!-- 头部 -->
    <HeaderComponent></HeaderComponent>

    <!-- Banner -->
    <Banner></Banner>

    <!-- 面包屑导航 -->
    <Breadcrumb style="margin-top:25px" v-if="this.$route.name !== '首页'"></Breadcrumb>

    
    <router-view></router-view>
    
    <!-- 尾部 -->
    <FooterComponent></FooterComponent>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["userList"]),
  },
  components: {},
  methods: {},
};
</script>


<style>
.App {
  background: #f0f1f3;
}
</style>

