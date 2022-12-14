<template>
  <div class="Home">
    <!-- 团队信息 -->
    <div class="home-Team">
      <div class="team-container">
        <!-- 标题 -->
        <div class="team-title">
          <p>团队成员</p>
          <div></div>
        </div>
        <!-- 内容 -->
        <div class="team-content">
          <TeamFloor
            v-for="i in userList"
            :iconUrl="i.iconUrl"
            :key="i.stuId"
            :name="i.name"
            :stuClass="i.stuClass"
            :stuId="i.stuId"
          ></TeamFloor>
        </div>
      </div>
    </div>
    <!-- 文章和图片集合 -->
    <div class="home-Content">
      <div class="content-container">
        <!-- 标题 -->
        <div class="content-title">
          <p>我们优质的动态</p>
          <p>我们分享了一些我们所了解的事情和故事，希望你们喜欢。</p>
        </div>
        <!-- 文章集合 -->
        <div class="page-row">
          <SmailPageFloor
            v-for="i in PageHotList"
            :key="i.id"
            :coverUrl="i.coverUrl"
            :iconUrl="i.iconUrl"
            :score="i.score"
            :content="i.text"
            :time="i.time"
            :title="i.title"
          ></SmailPageFloor>
        </div>
        <!-- 图片集合 -->
        <div class="image-row">
          <SmailImageFloor
            v-for="i in PictureHotList"
            :key="i.id"
            :coverUrl="i.coverUrl"
            :title="i.title"
            :score="i.score"
          ></SmailImageFloor>
        </div>
      </div>
    </div>

    <!-- 其他内容集合 -->
    <div class="home-Other">
      <div class="other-container">
        <SectionComponent :dataList="PageLastList" title="最新文章"></SectionComponent>
        <SectionComponent :dataList="PictureLastList" title="最新图片"></SectionComponent>
        <SectionComponent :dataList="WeObj" title="优秀项目"></SectionComponent>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapGetters } from "vuex";

import TeamFloor from "./components/TeamFloor";
import SmailPageFloor from "./components/SmailPageFloor";
import SmailImageFloor from "./components/SmailImageFloor";
export default {
  name: "Home",
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
    ...mapState("Home", ["userList"]),
    ...mapGetters({ PageHotList: "Home/PageHotList" }),
    ...mapGetters({ PictureHotList: "Home/PictureHotList" }),
    ...mapGetters({ PageLastList: "Home/PageLastList" }),
    ...mapGetters({ PictureLastList: "Home/PictureLastList" }),
  },
  components: {
    TeamFloor,
    SmailPageFloor,
    SmailImageFloor,
  },
  methods: {
    // 获取数据
    getData() {
      //发送请求
      this.$store.dispatch("Home/getUserList");
      this.$store.dispatch("Home/getHotList");
      this.$store.dispatch("Home/getLastList");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style lang="less" scoped>
.Home {
  //团队信息
  .home-Team {
    padding: 20px 400px;
    background: #f0f1f3;

    .team-container {
      width: 1103px;
      margin: auto;

      //标题
      .team-title {
        height: 90px;
        margin-bottom: 10px;
        p {
          font-size: 30px;
          text-align: center;
          line-height: 70px;
        }
        div {
          width: 500px;
          height: 1px;
          margin: 0 auto;
          background: #000;
        }
      }

      //内容
      .team-content {
        width: 1103px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
    }
  }

  //文章和图片集合
  .home-Content {
    padding: 20px 400px 50px;
    background-color: #e7f0ec;

    //标题
    .content-title {
      width: 1103px;
      margin: 30px 0 35px 0;
      padding-left: 10px;
      p:nth-of-type(1) {
        font-size: 30px;
      }
      p:nth-of-type(2) {
        font-size: 18px;
        font-weight: 200;
        margin-top: 15px;
        color: #868e96;
      }
    }

    //内容
    .content-container {
      width: 1103px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      //文章
      .page-row {
        display: grid;
        grid-template-columns: 367px 367px 367px;
        grid-template-rows: 500px 500px;
        margin-bottom: 30px;
      }

      //图片
      .image-row {
        background: #fff;
        width: 1045px;
        margin: auto;
        padding: 20px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  //其他内容集合
  .home-Other {
    padding: 50px 400px;
    background: #f0f1f3;

    .other-container {
      width: 1089px;
      margin: auto;
      padding: 0 7px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>

