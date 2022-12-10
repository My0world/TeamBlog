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
          <TeamFloor></TeamFloor>
          <TeamFloor></TeamFloor>
          <TeamFloor></TeamFloor>
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
          <SmailPageFloor></SmailPageFloor>
          <SmailPageFloor></SmailPageFloor>
          <SmailPageFloor></SmailPageFloor>
          <SmailPageFloor></SmailPageFloor>
          <SmailPageFloor></SmailPageFloor>
          <SmailPageFloor></SmailPageFloor>
        </div>
        <!-- 图片集合 -->
        <div class="image-row">
          <SmailImageFloor></SmailImageFloor>
          <SmailImageFloor></SmailImageFloor>
          <SmailImageFloor></SmailImageFloor>
          <SmailImageFloor></SmailImageFloor>
        </div>
      </div>
    </div>

    <!-- 其他内容集合 -->
    <div class="home-Other">
      <div class="other-container">
        <SectionComponent></SectionComponent>
        <SectionComponent></SectionComponent>
        <SectionComponent></SectionComponent>
      </div>
    </div>
  </div>
</template>


<script>
import TeamFloor from "./components/TeamFloor";
import SmailPageFloor from "./components/SmailPageFloor";
import SmailImageFloor from "./components/SmailImageFloor";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    TeamFloor,
    SmailPageFloor,
    SmailImageFloor,
  },
  methods: {},
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

