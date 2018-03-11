<template>

<div>
	<el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="录入类型">
    <el-select v-model="form.admin" placeholder="请选择录入类型">
      <el-option label="教师" value='2'></el-option>
      <el-option label="学生" value='3'></el-option>
    </el-select>
  </el-form-item>
		<el-form-item label="用户名">
			<el-input v-model="form.userName"></el-input>
		</el-form-item>
    <el-form-item label="班级">
			<el-input v-model="form.class"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>
</div>

</template>

<style>
.upload-demo {
  margin: 20px 80px;
}
</style>

<script>
import { setUser } from "../../api/api";

export default {
  data() {
    return {
      token:sessionStorage.getItem('token'),
      fileList2: [],
      form: {
        name: "",
        class: "",
        admin: '2'
      }
    };
  },
  methods: {
    onSubmit() {
      const data = this.form;
      const token = sessionStorage.getItem('token');
      setUser({ data, token }).then(res => {
        if (res.success) {
          alert('创建成功');
          this.$router.push({ path: "/adminxuesheng" });
        }
        else{alert('账号已存在')}
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>