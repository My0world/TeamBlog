<template>
  <div class="Picture">
    <!-- 内容 -->
    <div class="picture-main">
        <ImgFloor></ImgFloor>
        <ImgFloor></ImgFloor>
        <ImgFloor></ImgFloor>
        <ImgFloor></ImgFloor>
        <ImgFloor></ImgFloor>
    </div>
  </div>
</template>


<script>
import ImgFloor from './components/ImgFloor';
export default {
  name: "Picture",
  data() {
    return {};
  },
  components: {
    ImgFloor
  },
  methods: {},
};
</script>


<style lang="less" scoped>
.Picture {
  padding: 40px 350px 20px 350px;
  .picture-main {
    margin: 0px auto 50px;
    width: 1103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>

