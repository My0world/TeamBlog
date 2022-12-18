<template>
  <div class="AddView">
    <el-button type="primary" @click="addFormVisible = true">上传</el-button>

    <el-dialog title="上传信息" :visible.sync="addFormVisible">
      <!-- 文章表单 -->
      <el-form v-if="$route.name === '文章'" :model="addFormPage">
        <!-- 封面 -->
        <el-form-item label="上传封面:">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img
              v-if="addFormPage.imageUrl"
              :src="addFormPage.imageUrl"
              class="avatar"
            />
            <div v-else class="loader-icon">
              <i class="el-icon-plus avatar-uploader-icon"></i>
              <span>图片上传</span>
            </div>
          </el-upload>
        </el-form-item>
        <!-- 标题 -->
        <el-form-item label="标题:">
          <el-input
            type="text"
            v-model="addFormPage.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 内容 -->
        <el-form-item label="内容:">
          <el-input
            type="textarea"
            v-model="addFormPage.content"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <!-- 图片 -->
      <el-form v-if="$route.name === '图片'" :model="addFormImg">
        <!-- 封面 -->
        <el-form-item label="上传封面:">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img
              v-if="addFormImg.imageUrl"
              :src="addFormImg.imageUrl"
              class="avatar"
            />
            <div v-else class="loader-icon">
              <i class="el-icon-plus avatar-uploader-icon"></i>
              <span>图片上传</span>
            </div>
          </el-upload>
        </el-form-item>
        <!-- 标题 -->
        <el-form-item label="标题:">
          <el-input
            type="text"
            v-model="addFormImg.title"
            autocomplete="off"
          ></el-input> </el-form-item
      ></el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  name: "AddView",
  data() {
    return {
      addFormVisible: false, //对话框
      addFormPage: {
        imageUrl: "",
        title: "",
        content: "",
      }, //添加文章表单
      addFormImg: {
        imageUrl: "",
        title: "",
      }, //添加图片表单
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
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.el-form-item__content {
  width: 320px !important;
  justify-self: flex-end;
}

.el-input__inner {
  width: 320px !important;
}
.el-form-item::after,
.el-form-item::before {
  content: none;
}
</style>


<style>
.AddView {
}
</style>

