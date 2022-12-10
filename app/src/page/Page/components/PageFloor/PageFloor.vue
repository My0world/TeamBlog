<template>
  <div class="PageFloor">
    <div class="container">
      <div class="img">
        <el-image
          class="cover"
          :src="require('@/assets/2008030818/page/01.png')"
          fit="cover"
        ></el-image>
      </div>
      <div class="content">
        <p class="title">原型和原型链</p>
        <p class="text">
          微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。本文将从注册，到语法，到应用，深层次剖析小程序的使用。
        </p>
        <div class="body">
          <div class="message">
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
              >2551</span
            >
            <span class="user">
              <svg
                style="margin-right: 5px"
                t="1670137975484"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3686"
                width="18"
                height="18"
              >
                <path
                  d="M511.913993 941.605241c-255.612968 0-385.311608-57.452713-385.311608-170.810012 0-80.846632 133.654964-133.998992 266.621871-151.88846L393.224257 602.049387c-79.986561-55.904586-118.86175-153.436587-118.86175-297.240383 0-139.33143 87.211154-222.586259 233.423148-222.586259l7.912649 0c146.211994 0 233.423148 83.254829 233.423148 222.586259 0 54.184445 0 214.67361-117.829666 297.412397l-0.344028 16.685369c132.966907 18.061482 266.105829 71.041828 266.105829 151.716445C897.225601 884.152528 767.526961 941.605241 511.913993 941.605241zM507.957668 141.567613c-79.470519 0-174.250294 28.382328-174.250294 163.241391 0 129.698639 34.230808 213.469511 104.584579 255.784982 8.944734 5.332437 14.277171 14.965228 14.277171 25.286074l0 59.344868c0 15.309256-11.524945 28.0383-26.662187 29.414413-144.319839 14.449185-239.959684 67.429531-239.959684 95.983874 0 92.199563 177.346548 111.637158 325.966739 111.637158 148.792206 0 325.966739-19.26558 325.966739-111.637158 0-28.726356-95.639845-81.534688-239.959684-95.983874-15.48127-1.548127-27.006215-14.621199-26.662187-30.102469l1.376113-59.344868c0.172014-10.148833 5.676466-19.437594 14.277171-24.770032 70.525785-42.487485 103.208466-123.678145 103.208466-255.784982 0-135.031077-94.779775-163.241391-174.250294-163.241391L507.957668 141.567613 507.957668 141.567613z"
                  p-id="3687"
                  fill="#d4237a"
                ></path>
              </svg>
              梁庚大
            </span>
          </div>
          <el-button class="button" type="success">立即查看</el-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PageFloor",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.PageFloor {
  width: 735px;
  height: 150px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  .container {
    width: 715px;
    height: 130px;
    display: flex;
    justify-content: space-between;

    .img {
      width: 170px;
      height: 130px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .cover {
        width: 170px !important;
        height: 130px !important;
        transition-duration: 0.3s;
      }
      &:hover{
        .cover{
          width: 200px !important;
          height: 170px !important;
        }
      }
    }

    .content {
      width: 100%;
      padding: 5px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .title {
        width: 100%;
        text-align: left;
        font-size: 25px;
        color: black;
        transition-duration: .3s;
        cursor: pointer;

        &:hover{
          color: #4dac98;
        }
      }

      .text {
        text-indent: 2em;
        font-size: 14px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden; //溢出内容隐藏
        text-overflow: ellipsis; //文本溢出部分用省略号表示
        display: -webkit-box; //特别显示模式
        -webkit-line-clamp: 2; //行数
        line-clamp: 2;
        -webkit-box-orient: vertical; //盒子中内容竖直排列
      }

      .body {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .message {
          width: 250px;
          display: flex;
          justify-content: space-between;
          align-items: center;

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

          .user {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
          }
        }

        .button {
          height: 27px !important;
          line-height: 0;

          span {
            font-size: 12px !important;
          }
        }
      }
    }
  }
}
</style>

