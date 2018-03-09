<template>

<div>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item label="姓名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="生源地">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="班级">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="家庭人均年收入">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="家庭收入来源">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="学生陈述认定理由">
			<el-input v-model="form.name"></el-input>
    </el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>
</div>

</template>

<style>
.upload-demo{
	margin: 20px 80px;
}
</style>

<script>
export default {
  data() {
    return {
		fileList2: [],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
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