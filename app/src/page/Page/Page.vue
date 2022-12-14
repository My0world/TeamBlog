<template>
  <div class="Page">
    <div class="page-main">
      <!-- 内容 -->
      <div class="page-content">
        <PageFloor
          v-for="i in resultList"
          :key="i.id"
          :imageURL="i.coverUrl"
          :title="i.title"
          :content="i.text"
          :time="i.time"
          :score="i.score"
          :name="i.name"
        ></PageFloor>
      </div>
      <!-- 侧边栏 -->
      <div class="page-section">
        <SectionComponent
          :dataList="PageLastList"
          title="最新文章"
          style="margin-bottom: 20px"
        ></SectionComponent>
        <SectionComponent
          :dataList="PictureLastList"
          title="最新图片"
          style="margin-bottom: 20px"
        ></SectionComponent>
        <SectionComponent
          style="margin-bottom: 20px"
          :dataList="WeObj"
          title="优秀项目"
        ></SectionComponent>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

import PageFloor from "./components/PageFloor/PageFloor";
export default {
  name: "Page",
  data() {
    return {
      WeObj: [
        { id: "1", title: "后台项目", score: "99" },
        { id: "2", title: "贪吃蛇", score: "95" },
        { id: "3", title: "微信商店", score: "4" },
        { id: "4", title: "扫雷", score: "94" },
        { id: "5", title: "商店管理系统", score: "9" },
        { id: "6", title: "个人博客", score: "9" },
        { id: "7", title: "扫雷安卓版", score: "9" },
      ],
    };
  },
  computed: {
    ...mapGetters({ resultList: "Page/resultList" }),
    ...mapGetters({ PageHotList: "Home/PageHotList" }),
    ...mapGetters({ PageLastList: "Home/PageLastList" }),
    ...mapGetters({ PictureLastList: "Home/PictureLastList" }),
  },
  components: {
    PageFloor,
  },
  methods: {
    getData() {
      this.$store.dispatch("Home/getLastList");
      this.$store.dispatch("Page/getHotList");
    },
  },
  mounted() {
    this.getData();
  },
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

