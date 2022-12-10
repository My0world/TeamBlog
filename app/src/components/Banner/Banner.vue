<template>
  <div class="Banner">
    <div class="container">
      <img src="./images/01.png">
    </div>
  </div>
</template>


<script>
export default {
  name: "Banner",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>


<style lang="less" scoped>
.Banner {
  width: calc(100% - 800px);
  padding: 20px 400px;
  background: #4dac98;
  .container {
    width: 1103px;
    height: 475px;
    margin: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    img{
      width: 1103px;
      max-height: 100%;
    }
  }
}
</style>

