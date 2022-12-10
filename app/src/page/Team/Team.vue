<template>
  <div class="Team">
    <div class="container">
        <Guestbook style="margin-bottom: 50px"></Guestbook>
        <JoinForm @register="register"></JoinForm>
    </div>
  </div>
</template>


<script>
import Guestbook from './components/Guestbook'
import JoinForm from './components/JoinForm/JoinForm'
export default {
  name: "Team",
  data() {
    return {};
  },
  components: {
    Guestbook,
    JoinForm
  },
  methods: {
    register(v){
      console.log(v);
    }
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

