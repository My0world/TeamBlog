<template>
  <div class="SearchFloor">
    <a title="原型和原型链">原型和原型链</a>
    <p>
      一、前言在js中，原型和原型链是一个很重要的知识点，只有理解了它，我们才能更深刻的理解js，在这里，我们将分成几个部分来逐步讲解。二、构造函数构造函数和普通函数本质上没什么区别，只不过使用了new关键字创建对象的函数，被叫做了构造函数。构造函数的首字母一般是大写，用以区分普通函数，当然不大写也不会有什么错误。
    </p>
    <p>
      <span>点击量:</span
      >2&nbsp;—&nbsp;文章&nbsp;—&nbsp;2022-12-3—&nbsp;<span>梁庚大</span>&nbsp;
    </p>
  </div>
</template>


<script>
export default {
  name: "SearchFloor",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.SearchFloor {
  margin: auto;
  width: 1103px;
  a {
    color: #07519a;
    font-size: 18px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden; //溢出内容隐藏
    text-overflow: ellipsis; //文本溢出部分用省略号表示
    display: -webkit-box; //特别显示模式
    -webkit-line-clamp: 1; //行数
    line-clamp: 1;
    -webkit-box-orient: vertical; //盒子中内容竖直排列
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    margin: 10px 0;
    font-size: 14px;
  }
  p:nth-of-type(1) {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden; //溢出内容隐藏
    text-overflow: ellipsis; //文本溢出部分用省略号表示
    display: -webkit-box; //特别显示模式
    -webkit-line-clamp: 2; //行数
    line-clamp: 1;
    -webkit-box-orient: vertical; //盒子中内容竖直排列
  }
  p:nth-of-type(2) {
    color: green;
    span:nth-of-type(1) {
      color: #77c;
    }
    span:nth-of-type(2) {
      color: #77c;
    }
  }
}
</style>

