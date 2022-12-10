<template>
  <!-- :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload" -->
  <div class="JoinForm">
    <el-dialog title="填写信息" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="ruleForm" :model="form">
        <!-- 头像 -->
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else class="loader-icon">
            <i class="el-icon-plus avatar-uploader-icon"></i>
            <span>头像上传</span>
          </div>
        </el-upload>
        <!-- 姓名 -->
        <el-form-item label="姓名:" prop="name">
          <el-input
            type="text"
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 学号 -->
        <el-form-item label="学号:" prop="stuId">
          <el-input
            type="text"
            v-model="form.stuId"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 班级 -->
        <el-form-item label="班级:" prop="class">
          <el-input
            type="text"
            v-model="form.class"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码:" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item label="确认密码:" prop="againPass">
          <el-input
            type="password"
            v-model="form.againPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
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
    // 姓名
    let checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      } else {
        callback();
      }
    };
    // 班级
    let checkClass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("班级不能为空"));
      } else {
        callback();
      }
    };
    // 学号
    let checkStuId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("学号不能为空"));
      } else {
        callback();
      }
    };
    //密码
    let checkPassword = (rule, value, callback) => {
      let reg =
        /^(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/;
      if (!value) {
        return callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        return callback(new Error("至少包含数字跟字母,可以带字符,长度6-20"));
      } else {
        if (this.form.againPass !== "") {
          this.$refs.ruleForm.validateField("againPass");
        }
        callback();
      }
    };
    //确认密码
    let checkAgainPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      imageUrl: "",
      dialogFormVisible: false,
      form: {
        name: "", // 名字
        class: "", // 班级
        stuId: "", // 学号
        password: "", //密码
        againPass: "", //确认密码
      },
      // 表单规则
      rules: {
        name: [{ validator: checkName, trigger: "blur" }], // 名字
        class: [{ validator: checkClass, trigger: "blur" }], // 班级
        stuId: [{ validator: checkStuId, trigger: "blur" }], //学号
        password: [{ validator: checkPassword, trigger: "blur" }], //密码
        againPass: [{ validator: checkAgainPass, trigger: "blur" }], //确认密码
      },
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("register", {
            name: this.form.name,
            class: this.form.class,
            stuId: this.form.stuId,
            password: this.form.password,
          });
          this.dialogFormVisible = false;
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style>
.loader-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.avatar-uploader {
  margin-bottom: 40px;
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
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.el-form-item__content {
  width: 230px !important;
  justify-self: flex-end;
}

.el-input__inner {
  width: 230px !important;
}
.el-form-item::after,
.el-form-item::before {
  content: none;
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

