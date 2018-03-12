<template>
	<el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="title"
      label="信息通知"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
			详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getInform } from "../../api/api";
  export default {
    beforeMount() {
    const token = sessionStorage.getItem("token");
    const type = 2;
    getInform({ token, type }).then(res => {
      this.tableData = res.data;
    });
  },
    methods: {
      deleteRow(index, rows) {
      this.$router.push({
        path: "/studentJiangxuexiangqing",
        query: { index: index, rows: rows }
      });
    }
  },
    data() {
      return {
        tableData: [{
          title:'jfklsadjfkdsal'
        }]
      }
    }
  }
</script>