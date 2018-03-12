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
        <el-button type="primary" @click="onSubmit">提交</el-button>
  
    </div>
</template>

<script>
import { setPovertyLevelSubmit } from "../../api/api";
export default {
  beforeMount() {
    this.tableData = this.$route.query.tableData;
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
  },
   methods: {
    onSubmit() {
      const token = sessionStorage.getItem("token");
      setPovertyLevelSubmit({ token }).then(res => {
        if (res.success) {
            alert('提交成功')
            this.$router.push({ path: "/teacherDocumentSh" })
        };
      });
    }
  }
};
</script>