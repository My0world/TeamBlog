<template>
  <div class="NavCompontent">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>导航</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/mine">个人信息</el-menu-item>
          <el-menu-item index="/page">文章</el-menu-item>
          <el-menu-item index="/picture">图片</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <AddView v-if="$route.name === '文章' || $route.name === '图片'" class="addBtn"></AddView>
  </div>
</template>


<script>
export default {
  name: "NavCompontent",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style>
.el-menu {
  width: 200px;
}
</style>

<style lang="less" scoped>
.NavCompontent {
  width: 100%;
  height: 56px;
  background: #545c64;
  display: flex;
  justify-content: space-between;
  .addBtn {
    align-self:center;
    margin-right: 10px;
  }
}
</style>

