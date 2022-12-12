<template>
  <div class="ListView">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="id" width="70">
        <template slot-scope="scope"
          ><p class="table-content">{{ scope.row.id }}</p>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="1080">
        <template slot-scope="scope"> {{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="时间" width="180">
        <template slot-scope="scope">
          <p class="table-content">{{ scope.row.time }}</p></template
        >
      </el-table-column>
      <el-table-column label="点击量" width="180">
        <template slot-scope="scope"
          ><p class="table-content">{{ scope.row.score }}</p></template
        >
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <p class="table-content">
            <el-button size="mini">更新</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  name: "ListView",
  data() {
    return {
      tableData: [
        {
          id: "112",
          title:
            "原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链原型和原型链",
          time: "2016-05-02",
          score: "9999",
        },
        { id: "113", title: "this的指向", time: "2016-05-02", score: "9999" },
      ],
    };
  },
  components: {},
  methods: {},
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
    .table-content{
        text-align: center;
    }
}
</style>

