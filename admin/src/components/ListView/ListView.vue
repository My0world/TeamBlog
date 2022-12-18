<template>
  <div class="ListView">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="id">
        <template slot-scope="scope"
          ><p class="table-content">{{ scope.row.id }}</p>
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope"> {{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="时间">
        <template slot-scope="scope">
          <p class="table-content">{{ scope.row.time }}</p></template
        >
      </el-table-column>
      <el-table-column label="点击量">
        <template slot-scope="scope"
          ><p class="table-content">{{ scope.row.score }}</p></template
        >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <p class="table-content">
            <el-button size="mini">更新</el-button>
            <el-popconfirm
              @confirm="deletDate(scope.row.id)"
              title="确定删除吗？"
            >
              <el-button
                style="margin-left: 10px"
                type="danger"
                size="mini"
                slot="reference"
                >删除</el-button
              >
            </el-popconfirm>
          </p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  name: "ListView",
  props: ["tableData"],
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {
    //删除操作
    deletDate(id) {
      id = parseInt(id);
      this.$store.dispatch("Operation/deleteData", { id: id });
    },
  },
};
</script>

<style>
.el-table th.el-table__cell > .cell {
  text-align: center;
}
</style>

<style lang="less" scoped>
.ListView {
  margin-left: 200px;
  .table-content {
    text-align: center;
  }
}
</style>

