<template>
  <div class="SmailPageFloor">
    <div class="container">
      <div class="cover">
        <el-image
          class="img"
          :src="coverUrl"
          fit="cover"
        ></el-image>
        <img :src="iconUrl" class="touxiang" />
      </div>
      <div class="message">
        <div>
          <span class="score"
            ><svg
              t="1670072535750"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2479"
              width="23"
              height="23"
            >
              <path
                d="M710.287 320.707c-87.785 26.446-103.857 101.388-98.198 148.99-62.617-77.737-60.05-167.163-60.05-295.997C351.224 253.674 397.88 484.262 391.9 554.283c-50.513-43.664-60.055-147.987-60.055-147.987-53.328 28.965-80.076 106.364-80.076 169.138 0 151.81 116.513 274.867 260.23 274.867 143.714 0 260.23-123.059 260.23-274.867 0-90.22-62.713-131.85-61.957-254.727h0.015m0 0"
                p-id="2480"
                fill="#d81e06"
              ></path></svg
            >{{score}}</span
          >
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
            {{time}}
          </span>
        </div>
        <div><a :title="title">{{title}}</a></div>
        <div>
          {{content}}
        </div>
        <div>
          <a>了解更多<i class="el-icon-arrow-right"></i> </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SmailPageFloor",
  props:["coverUrl","iconUrl","score","content","time","title"],
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.SmailPageFloor {
  width: 350px;
  height: 470px;
  margin: auto;
  background: #fff;

  .container {
    .cover {
      width: 350px;
      height: 225px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      .img {
        width: 350px;
        height: 225px;
        transition-duration: 0.7s;
        &:hover {
          width: 470px;
          height: 455px;
        }
      }
      .touxiang {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 2px solid white;
        transition-duration: 0.3s;
      }
    }

    .message {
      padding: 20px;
      width: 310px;
      height: 205px;

      div:nth-of-type(1) {
        width: 170px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .time {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
        .score {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: red;
          font-size: 12px;
        }
      }

      div:nth-of-type(2) {
        padding-left: 5px;
        margin-bottom: 12px;
        a {
          width: 305px;
          font-size: 20px;
          color: #000;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden; //溢出内容隐藏
          text-overflow: ellipsis; //文本溢出部分用省略号表示
          display: -webkit-box; //特别显示模式
          -webkit-line-clamp: 1; //行数
          line-clamp: 1;
          -webkit-box-orient: vertical; //盒子中内容竖直排列
          cursor: pointer;
          &:hover {
            text-decoration: underline #666;
          }
        }
      }

      div:nth-of-type(3) {
        width: 305px;
        padding-left: 5px;
        margin-bottom: 30px;
        font-size: 15px;
        text-indent: 2em;
        line-height: 26px;
        color: #666;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden; //溢出内容隐藏
        text-overflow: ellipsis; //文本溢出部分用省略号表示
        display: -webkit-box; //特别显示模式
        -webkit-line-clamp: 3; //行数
        line-clamp: 3;
        -webkit-box-orient: vertical; //盒子中内容竖直排列
      }

      div:nth-of-type(4) {
        width: 310px;
        display: flex;
        justify-content: flex-end;

        a {
          letter-spacing: 2px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;

          &:hover {
            text-decoration: underline #666;
          }
        }
      }
    }
  }
}
</style>

