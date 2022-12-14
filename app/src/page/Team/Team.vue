<template>
  <div class="Team">
    <div class="container">
      <Guestbook
        v-for="i in userList"
        :key="i.stuId"
        :imgURL="i.iconUrl"
        :name="i.name"
        :stuid="i.stuId"
        :stuclass="i.stuClass"
        :content="i.guestBook"
        style="margin-bottom: 50px"
      ></Guestbook>
      <JoinForm @register="register"></JoinForm>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import Guestbook from "./components/Guestbook";
import JoinForm from "./components/JoinForm/JoinForm";
export default {
  name: "Team",
  data() {
    return {};
  },
  computed: {
    ...mapState("Team", ["userList"]),
  },
  components: {
    Guestbook,
    JoinForm,
  },
  methods: {
    //注册
    register(v) {
      v.stuId = parseInt(v.stuId);
      this.$store.dispatch("Team/register", v);
    },
    //获取用户信息
    getData() {
      this.$store.dispatch("Team/getUserList");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style lang="less" scoped>
.Team {
  padding: 40px 350px 20px 350px;
  .container {
    margin: 0px auto 50px;
    width: 1103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>

