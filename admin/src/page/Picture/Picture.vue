<template>
  <div class="Picture">
    <ListView :tableData="picture"></ListView>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "Picture",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ picture: "Mine/picture" }),
  },
  components: {},
  methods: {},
};
</script>


<style>
.Picture {
}
</style>

