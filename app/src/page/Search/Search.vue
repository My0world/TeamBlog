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
    return {};
  },
  components: {
    SearchFloor,
  },
  methods: {},
};
</script>


<style>
.Search {
  min-height: 1000px;
  padding: 40px 400px 20px 400px;
}
</style>

