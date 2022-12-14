<template>
  <div class="SectionComponent">
    <div class="title">
      <div style="width: 5px; height: 31px; background: red"></div>
      <div>{{title}}</div>
    </div>
    <ul>
      <!--  -->
      <li v-for="i in dataList" :key="i.id">
        <svg
          t="1670139451826"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4687"
          width="17"
          height="17"
        >
          <path
            d="M790.536784 923.653571 77.292364 923.653571 77.292364 228.828662 625.784486 228.828662 625.784486 264.644379 113.108081 264.644379 113.108081 887.837854 753.697761 887.837854 753.697761 410.977165 790.536784 410.977165Z"
            p-id="4688"
            fill="#4dac98"
          ></path>
          <path
            d="M904.925691 115.801844l25.885344 25.885344-400.116482 400.116482-25.885344-25.885344 400.116482-400.116482Z"
            p-id="4689"
            fill="#4dac98"
          ></path>
          <path
            d="M932.909375 340.16233 896.369158 338.016457 908.096247 138.5311 708.61089 150.258189 706.465017 113.717971 947.06784 99.559507Z"
            p-id="4690"
            fill="#4dac98"
          ></path>
        </svg>
        <a :title="i.title">{{i.title}}</a>
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
          >{{i.score}}</span
        >
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "SectionComponent",
  props:['dataList','title'],
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.SectionComponent {
  width: 300px;
  height: 215px;
  background: #fff;

  .title {
    width: 300px;
    height: 30px;
    display: flex;
    margin-bottom: 5px;

    div:nth-of-type(2) {
      width: 295px;
      height: 30px;
      border-bottom: 1px solid rgb(226, 226, 226);
      text-align: center;
      line-height: 30px;
      font-size: 17px;
    }
  }

  ul {
    width: 300px;
    height: 180px;
    overflow: hidden;

    li {
      padding-left: 5px;
      padding-right: 5px;
      padding-bottom: 2px;
      list-style: none;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e7f0ec;
      cursor: pointer;

      a {
        display: block;
        width: 200px;
        height: 18px;
        line-height: 18px;
        text-align: left;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden; //溢出内容隐藏
        text-overflow: ellipsis; //文本溢出部分用省略号表示
        display: -webkit-box; //特别显示模式
        -webkit-line-clamp: 1; //行数
        line-clamp: 1;
        -webkit-box-orient: vertical; //盒子中内容竖直排列
      }

      .score {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: red;
        font-size: 12px;
      }
      &:hover {
        a {
          text-decoration: underline #4dac98;
        }
      }
    }
  }
}
</style>

