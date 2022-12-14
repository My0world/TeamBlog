<template>
  <div class="Guestbook">
    <div class="message">
      <img :src="imgURL" />
      <div class="table">
        <p><strong>姓名：</strong>{{name}}</p>
        <p><strong>学号：</strong>{{stuid}}</p>
        <p><strong>班级：</strong>{{stuclass}}</p>
      </div>
    </div>
    <div class="content">
      <div class="text">
        <div>
          {{content}}
        </div>
      </div>
      <div class="bottom">
        <div class="time">
          <svg
            style="margin-right: 5px"
            t="1670136575023"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2704"
            width="17"
            height="17"
          >
            <path
              d="M533.333333 96c229.76 0 416 186.24 416 416S763.093333 928 533.333333 928 117.333333 741.76 117.333333 512 303.573333 96 533.333333 96z m0 64C338.922667 160 181.333333 317.589333 181.333333 512S338.922667 864 533.333333 864 885.333333 706.410667 885.333333 512 727.744 160 533.333333 160z m32 116.608v220.992l163.2 144.554667-42.410666 47.893333-184.789334-163.626667v-249.813333h64z"
              fill="#1677FF"
              p-id="2705"
            ></path>
          </svg>
          2022-12-03
        </div>
        <el-button type="success">进入他的空间</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Guestbook",
  props:["imgURL","name","stuid","stuclass","content"],
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style scoped>
.el-button{
    margin-left: 15px;
    padding: 4px 4px
}
</style>


<style lang="less" scoped>
.Guestbook {
  width: 1103px;
  height: 300px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  .message {
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #f3f8fb;

    img {
      width: 130px;
      height: 130px;
      border-radius: 100%;
    }
    .table {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;
      p {
        font-size: 16px;

        strong {
          font-size: 16px;
          color: #026b70;
          font-weight: bold;
        }
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text {
      width: 853px;
      height: 260px;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        width: 820px;
        height: 230px;
        font-size: 15px;
        line-height: 27px;
        text-indent: 2em;
        word-wrap: break-word;
        word-break: normal;
        overflow-y: auto;
      }
    }
    .bottom {
      width: 838px;
      height: 40px;
      padding-right: 15px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: #f3f8fb;
      .time {
        display: flex;
        align-items: center;
        font-size: 13px;
      }
    }
  }
}
</style>

