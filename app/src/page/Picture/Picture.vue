<template>
  <div class="Picture">
    <!-- 内容 -->
    <div class="picture-main">
      <ImgFloor
        v-for="i in resultList"
        :key="i.id"
        :coverUrl="i.coverUrl"
        :iconUrl="i.iconUrl"
        :score="i.score"
        :time="i.time"
        :title="i.title"
      ></ImgFloor>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

import ImgFloor from "./components/ImgFloor";
export default {
  name: "Picture",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ resultList: "Picture/resultList" }),
  },
  components: {
    ImgFloor,
  },
  methods: {
    getData() {
      this.$store.dispatch("Picture/getHotList");
    },
  },
  mounted() {
    this.getData();
  },
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

