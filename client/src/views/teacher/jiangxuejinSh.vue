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
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          {{tableData[scope.$index].result}}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-button type="primary" @click="onSubmit">生成结果</el-button>
  
    </div>

</template>

<script>
import { getAward } from "../../api/api";
export default {
  beforeMount() {
    const token = sessionStorage.getItem("token");
    getAward({ token }).then(res => {
      this.tableData = res.data;
    });
  },
  methods: {
    deleteRow(index, rows) {
      this.$router.push({
        path: "/teacherJiangxuejinxiangqingSh",
        query: { index: index, rows: rows }
      });
    },
    onSubmit(){
        this.$router.push({
        path: "/teacherJiangxuejinSubmit",
        query: { tableData: this.tableData.filter(item => {return (item.result !== '未处理' && item.result !== '不同意')}) }
      });
    }
  },
  data() {
    return {
      tableData: [
        {
          title: ""
        }
      ],
      done: ""
    };
  }
};
</script>