<template>
  <div class="NavCompontent">
    <el-menu
      default-active="/mine"
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
          <el-menu-item index="/image">图片</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
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
.el-menu{
    width: 200px;
}
</style>

<style>
.NavCompontent {
    width: 100%;
    height: 56px;
    background: #545c64;
}
</style>

