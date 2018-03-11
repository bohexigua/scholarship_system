<template>
	<div>
        <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="信息通知"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="结果"
      width="120">
      <template slot-scope="scope">
          {{tableData[scope.$index].done}}
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
import { setAwardSubmit } from "../../api/api";
export default {
  beforeMount() {
    this.tableData = this.$route.query.form;
  },
  methods: {
    data() {
      return {       
        tableData: [
          {
            name: "jfklsadjfkdsal"
          }
        ],
        done: "待处理"
      };
    }
  }
};
</script>