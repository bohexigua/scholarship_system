<template>

<div>
	<el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="录入类型">
    <el-select v-model="form.type" placeholder="请选择录入类型">
      <el-option label="奖学金" value='1'></el-option>
      <el-option label="助学金" value='2'></el-option>
    </el-select>
  </el-form-item>
		<el-form-item label="名称">
			<el-input v-model="form.title"></el-input>
		</el-form-item>
        <el-form-item label="金额">
			<el-input v-model="form.award"></el-input>
		</el-form-item>
        <el-form-item label="要求平均绩点">
			<el-input v-model="form.grade"></el-input>
		</el-form-item><el-form-item label="其他">
			<el-input v-model="form.content"></el-input>
		</el-form-item>
    <el-form-item label="贫困等级">
			<el-input v-model="form.poverty_level"></el-input>
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
import { setInform } from "../../api/api";

export default {
  data() {
    return {
      token:sessionStorage.getItem('token'),
      form: {
        type:'2',
        title: "",
        award: "",
        grade: '',
        content:'',
        poverty_level:''
      }
    };
  },
  methods: {
    onSubmit() {
      const data = this.form;
      const token = sessionStorage.getItem('token');
      setInform({ data, token }).then(res => {
        if (res.success) {
          alert('创建成功');
          this.$router.push({ path: "/admincreatJiangxue" });
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
