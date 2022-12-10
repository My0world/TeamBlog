<template>
  <div class="FooterComponent">
    <div class="container">
      <div class="row">
        <!-- 版权 -->
        <p>
          <strong
            >Copyright &copy; 2022.Company xxx xxx All rights reserved.</strong
          >
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FooterComponent",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>


<style lang="less" scoped>
.FooterComponent {
  background: #edf2ff;
  border-top: 1px solid #d8e3fe;
  padding: 7px 400px 0px 400px;
  .container {
    width: 1103px;
    margin: auto;
  }

  .row p {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-transform: unset;
    color: #666;
    margin-bottom: 0.3rem;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

