<template>
  <div class="ImgFloor">
    <div class="container">
      <div class="cover">
        <el-image
          class="img"
          :src="require('@/assets/2008030818/page/01.png')"
          fit="cover"
        >
        </el-image>
        <img src="@/assets/2008030818/user/01.jpg" class="touxiang" />
        <span class="score"
          ><svg
            t="1670072535750"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2479"
            width="20"
            height="20"
          >
            <path
              d="M710.287 320.707c-87.785 26.446-103.857 101.388-98.198 148.99-62.617-77.737-60.05-167.163-60.05-295.997C351.224 253.674 397.88 484.262 391.9 554.283c-50.513-43.664-60.055-147.987-60.055-147.987-53.328 28.965-80.076 106.364-80.076 169.138 0 151.81 116.513 274.867 260.23 274.867 143.714 0 260.23-123.059 260.23-274.867 0-90.22-62.713-131.85-61.957-254.727h0.015m0 0"
              p-id="2480"
              fill="#d81e06"
            ></path></svg
          >2551
        </span>
        <span class="time">
          <svg
            style="margin-right: 5px"
            t="1670136575023"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2704"
            width="20"
            height="20"
          >
            <path
              d="M533.333333 96c229.76 0 416 186.24 416 416S763.093333 928 533.333333 928 117.333333 741.76 117.333333 512 303.573333 96 533.333333 96z m0 64C338.922667 160 181.333333 317.589333 181.333333 512S338.922667 864 533.333333 864 885.333333 706.410667 885.333333 512 727.744 160 533.333333 160z m32 116.608v220.992l163.2 144.554667-42.410666 47.893333-184.789334-163.626667v-249.813333h64z"
              fill="#1677FF"
              p-id="2705"
            ></path>
          </svg>
          2022-12-03
        </span>
      </div>

      <p>原型和原型链</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "ImgFloor",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.ImgFloor {
  width: 260px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  margin-bottom: 20px;

  .container {
    width: 240px;
    height: 220px;
    .cover {
      position: relative;
      width: 240px;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;

      span {
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        height: 23px;
        color: white;
        line-height: 27px;
        display: flex;
        align-items: center;
        padding: 0 3px;
      }
      .touxiang {
        position: absolute;
        bottom: 32%;
        right: -100%;
        width: 23px;
        height: 23px;
        border-radius: 100%;
        border: 1px solid white;
        transition-duration: 0.3s;
      }
      .score {
        bottom: 17%;
        right: -100%;
        transition-duration: 0.3s;
      }
      .time {
        bottom: 2%;
        right: -100%;
        transition-duration: 0.3s;
      }

      .img {
        width: 250px;
        height: 190px;
        transition-duration: 0.3s;
      }
      &:hover {
        .img {
          width: 270px;
          height: 250px;
        }
        .touxiang {
          right: 2%;
        }
        .score {
          right: 2%;
        }
        .time {
          right: 2%;
        }
      }
    }

    p {
      margin-top: 17px;
      font-size: 17px;
      text-align: center;
    }
  }
}
</style>

