<template>
  <div class="SmailImageFloor">
    <div class="container">
      <el-image
        class="img"
        :src="require('@/assets/2008030818/image/01.png')"
        fit="cover"
      ></el-image>
      <div class="brightness"></div>
      <p> 
        游戏壁纸
      </p>
      <span>99+</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "SmailImageFloor",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.SmailImageFloor {
  width: 250px;
  height: 187px;
  .container {
    width: 250px;
    height: 187px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    .img {
      width: 250px;
      height: 187px;
    }

    .brightness {
      background-color: rgba(231, 240, 236, 0.5);
      position: absolute;
      top: 0;
      height: 0;
      width: 250px;
      height: 187px;
      transition-duration: 0.5s;
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      padding: 0px 20px 0px 20px;
      background: rgba(0, 23, 55, 0.8);
      color: #fff;
      border-radius: 100px;
      font-size: 17px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden; //溢出内容隐藏
      text-overflow: ellipsis; //文本溢出部分用省略号表示
      display: -webkit-box; //特别显示模式
      -webkit-line-clamp: 1; //行数
      line-clamp: 1;
      -webkit-box-orient: vertical; //盒子中内容竖直排列
      cursor: pointer;
    }
    span{
        z-index: 999;
        position: absolute;
        top: 67px;
        right: 45px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #03c63a;
        font-size:12px ;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        color: white;

    }

    &:hover {
      .brightness {
        background-color: rgba(231, 240, 236, 0);
      }
    }
  }
}
</style>

