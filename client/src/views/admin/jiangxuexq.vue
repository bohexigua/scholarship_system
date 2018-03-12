<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'class', order: 'descending'}"
    >
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="class"
      label="班级"
      sortable>
    </el-table-column>
    <el-table-column
      prop="result"
      sortable      
      label="等级">
    </el-table-column>
  </el-table>
</template>

<script>
import { getAwardUserInfo } from "../../api/api";
export default {
  beforeMount() {
    const id = this.$route.query.id
    const token = sessionStorage.getItem("token");    
    getAwardUserInfo({id,token}).then(res => {
      this.tableData = res.data;
    })
  },
    data() {
      return {   
        tableData: [],
        done: "待处理"
      };
    },
   methods: {
    onSubmit() {
      const token = sessionStorage.getItem("token");
      setAwardSubmit({ token }).then(res => {
        if (res.success) {
            alert('提交成功')
            this.$router.push({ path: "/teacherJiangxuejinSh" })
        };
      });
    }
  }
};
</script>