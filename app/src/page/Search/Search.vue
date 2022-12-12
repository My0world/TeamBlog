<template>
  <div class="Search">
    <SearchFloor></SearchFloor>
    
  </div>
</template>


<script>


import SearchFloor from "./components/SearchFloor";
export default {
  name: "Search",
  data() {
    return {
      keyword:""
    };
  },
  watch:{
    // 监听路由信息
    $route(){
      this.keyword = this.$route.query.keyword
      this.getData()
    }
  },
  components: {
    SearchFloor,
  },
  methods: {

    // 获取数据
    getData(){
      //发送请求
      this.$store.dispatch("search/getSearchList", this.keyword);
    }
  },
  mounted(){
    this.keyword = this.$route.query.keyword
    this.getData()
  }

};
</script>


<style>
.Search {
  min-height: 1000px;
  padding: 40px 400px 20px 400px;
}
</style>

