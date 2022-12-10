<template>
  <div class="Page">
    <div class="page-main">
      <!-- 内容 -->
      <div class="page-content">
        <PageFloor></PageFloor>
        <PageFloor></PageFloor>
        <PageFloor></PageFloor>
        <PageFloor></PageFloor>
        <PageFloor></PageFloor>
        <PageFloor></PageFloor>
        <PageFloor></PageFloor>
        <PageFloor></PageFloor>
        <PageFloor></PageFloor>
      </div>
      <!-- 侧边栏 -->
      <div class="page-section">
        <SectionComponent style="margin-bottom:20px"></SectionComponent>
        <SectionComponent style="margin-bottom:20px"></SectionComponent>
        <SectionComponent style="margin-bottom:20px"></SectionComponent>
      </div>
    </div>
  </div>
</template>


<script>
import PageFloor from "./components/PageFloor/PageFloor";
export default {
  name: "Page",
  data() {
    return {};
  },
  components: {
    PageFloor,
  },
  methods: {},
};
</script>


<style lang="less" scoped>
.Page {
  padding: 40px 400px 20px 400px;
  background: #f0f1f3;

  .page-main {
    margin: 0px auto 50px;
    width: 1103px;
    display: flex;
    justify-content: space-between;
  }
}
</style>

