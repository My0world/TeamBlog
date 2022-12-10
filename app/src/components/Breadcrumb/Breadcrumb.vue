<template>
  <div class="Breadcrumb">
    <span>你当前的位置：</span> 
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>


<script>
export default {
  name: "Breadcrumb",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.Breadcrumb {
    width: 1083px;
    padding: 10px;
    display: flex;
    align-items: center;
    margin: auto;
    background: #fff;
    span{
      font-size:14px ;
      color: #333;
    }
}
</style>

