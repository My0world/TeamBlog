<template>
  <div class="JoinForm">
    <el-dialog title="填写信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else class="loader-icon">
            <i class="el-icon-plus avatar-uploader-icon"></i>
            <span>头像上传</span>
          </div>
        </el-upload>
        <el-form-item label="姓名:">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学号:">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级:">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <div class="container">
      <div @click="dialogFormVisible = true">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </div>
      <div>
        <img src="./image/开始.png" style="width: 90px; height: 90px" />
        <span>点击加入我们</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "JoinForm",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        class: "",
        stuId: "",
      },
      imageUrl:""
    };
  },
  components: {},
  methods: {},
};
</script>

<style>
.loader-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.avatar-uploader{
  margin-bottom:40px ;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader-icon {
  font-size: 50px;
  color: #8c939d;
  width: 78px;
  height: 78px;
  line-height: 78px;
  text-align: center;
}
.el-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-form-item {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-form-item__content {
  width: 230px !important;
}

.el-input__inner {
  width: 230px !important;
}
</style>

<style lang="less" scoped>
.JoinForm {
  .container {
    width: 1103px;
    height: 300px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:nth-of-type(1) {
      width: 250px;
      height: 300px;
      background: #f3f8fb;
      display: flex;
      justify-content: center;
      align-items: center;
      transition-duration: 0.9s;
      cursor: pointer;
    }
    div:nth-of-type(2) {
      margin-right: 175px;
      width: 600px;
      height: 200px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        font-size: 70px;
      }
    }
  }
}
</style>

