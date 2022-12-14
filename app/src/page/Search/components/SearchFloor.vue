<template>
  <div class="SearchFloor">
    <a href="#" title="原型和原型链">{{title}}</a>
    <p>
      {{content}}
    </p>
    <p>
      <span>点击量:</span
      >{{score}}&nbsp;—&nbsp;{{type}}&nbsp;—&nbsp;{{time}}—&nbsp;<span>{{name}}</span>&nbsp;
    </p>
  </div>
</template>


<script>
export default {
  name: "SearchFloor",
  props:['title',"content","score","type","time","name"],
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

