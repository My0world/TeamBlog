<template>
  <div class="TeamFloor">
    <div class="container">
      <!-- 头像 -->
      <div class="imageIcon">
        <img src="@/assets/2008030818/user/01.jpg" />
      </div>
      <!-- 个人信息 -->
      <div class="personMessage">
        <p>梁庚大</p>
        <p>计算机系</p>
        <p>20软件工程8班</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "TeamFloor",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.TeamFloor {
  margin: auto;
  .container {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    height: 320px;
    background-color: transparent;
    border-radius: 20px;
    transition-duration: .3s;

    //头像
    .imageIcon {
      width: 200px;
      height: 200px;
      border-top-left-radius: 100px;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      background: #fff;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 185px;
        height: 185px;
        border-radius: 100px;
      }
    }

    //个人信息
    .personMessage {
      width: 200px;
      height: 100px;
      p {
        text-align: left;
        margin-bottom: 10px;
      }
      p:nth-of-type(1) {
        font-size: 23px;
        letter-spacing: 8px;
        margin-bottom: 12px;
        color: #4dac98;
        font-weight: 500;
      }
      p:nth-of-type(2),
      p:nth-of-type(3) {
        font-size: 13px;
        letter-spacing: 2px;
        color: #000;
      }
    }

    &:hover {
        cursor: pointer;
        background-color:rgb(226, 225, 225) ;
    }
  }
}
</style>

