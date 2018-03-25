<template>

<div>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item label="姓名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="生源地">
			<el-input v-model="form.syd"></el-input>
		</el-form-item>
    <el-form-item label="班级">
			<el-input v-model="form.class"></el-input>
		</el-form-item>
    <el-form-item label="家庭人均年收入">
			<el-input v-model="form.rjnsr"></el-input>
		</el-form-item>
    <el-form-item label="家庭收入来源">
			<el-input v-model="form.jtsrly"></el-input>
		</el-form-item>
    <el-form-item label="学生陈述认定理由">
			<el-input v-model="form.reason"></el-input>
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
import { setPovertyLevel } from "../../api/api";

export default {
  data() {
    return {
      token: sessionStorage.getItem("token"),
      fileList2: [],
      form: {
        name: "haha",
        class: "jhahah",
        syd: "nan",
        rjnsr: "1111",
        jtsrly: "han",
        reason: "dy"
      }
    };
  },
  methods: {
    onSubmit() {
      const data = this.form;
      const token = this.token;
      setPovertyLevel({ data, token }).then(res => {
        if (res.success) {
          alert("提交成功");
          this.$router.push({ path: "/studentDocumentSelect" });
        }
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