<template>

<div>
	<el-upload
		class="upload-demo"
		action="https://jsonplaceholder.typicode.com/posts/"
		:on-preview="handlePreview"
		:before-upload="handleBefore"
		:on-remove="handleRemove"
		:file-list="fileList2"
		list-type="picture">
		<el-button size="small" type="primary">点击上传证件照</el-button>
		<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item label="姓名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="性别">
			<el-input v-model="form.sex"></el-input>
		</el-form-item><el-form-item label="出生年月">
			<el-input v-model="form.brithday"></el-input>
		</el-form-item><el-form-item label="学号">
			<el-input v-model="form.id"></el-input>
		</el-form-item><el-form-item label="民族">
			<el-input v-model="form.mz"></el-input>
		</el-form-item><el-form-item label="政治面貌">
			<el-input v-model="form.zzmm"></el-input>
		</el-form-item><el-form-item label="校内住址">
			<el-input v-model="form.saddress"></el-input>
		</el-form-item><el-form-item label="家庭住址">
			<el-input v-model="form.faddress"></el-input>
		</el-form-item><el-form-item label="家庭联系电话">
			<el-input v-model="form.ftel"></el-input>
		</el-form-item><el-form-item label="家庭收入来源">
			<el-input v-model="form.jtsrly"></el-input>
		</el-form-item><el-form-item label="平均学分绩点">
			<el-input v-model="form.pjxfjd"></el-input>
		</el-form-item><el-form-item label="体测成绩">
			<el-input v-model="form.tccj"></el-input>
		</el-form-item><el-form-item label="入学时间">
		<el-input v-model="form.start"></el-input>
		</el-form-item><el-form-item label="学院">
			<el-input v-model="form.xy"></el-input>
		</el-form-item><el-form-item label="专业">
			<el-input v-model="form.zy"></el-input>
		</el-form-item><el-form-item label="年级">
			<el-input v-model="form.grade"></el-input>
		</el-form-item><el-form-item label="班级">
			<el-input v-model="form.class"></el-input>
		</el-form-item><el-form-item label="联系电话">
			<el-input v-model="form.tel"></el-input>
		</el-form-item><el-form-item label="曾获何种奖励">
			<el-input v-model="form.jl"></el-input>
		</el-form-item><el-form-item label="曾获何种资助">
			<el-input v-model="form.hzzz"></el-input>
		</el-form-item><el-form-item label="申请奖学金理由">
			<el-input v-model="form.sqjly"></el-input>
		</el-form-item><el-form-item label="申请助学金理由">
			<el-input v-model="form.sqzly"></el-input>
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
  import { userInfo } from '../../api/api';

export default {
  data() {
    return {
		
			fileList2: [],
			token:sessionStorage.getItem('token'),
      form: {
        name: "haha",
        sex: "nan",
        brithday: "1999-2-2",
        id: "1111",
        mz: "han",
        zzmm: "dy",
        start: "2011-1-3",
        xy: "hjkasdfd",
        zy: "hahaha",
        grade: "2012",
        class: "hahaha",
        tel: "1213789",
        saddress: "ueiwhfjaklfjkdls",
        faddress: "kflsajfklds",
        ftel: "2890890",
        jtsrly: "djkslajfkdls;a",
        pjxfjd: 34.33,
        tccj: 233,
        jl: "fhjdsakhfjdskaf",
        hzzz: "hdjkashfjdksa",
        sqjly: "jdkafhjdska",
        sqzly: "hfjdksahfjk"
      }
    };
  },
  methods: {
    onSubmit() {
			const data = this.form
			const token = this.token
      userInfo({data,token}).then(res=>{
				if(res.success)
        this.$router.push({ path: '/studentInformation' });
			})
	},
	handleRemove(file, fileList) {
        console.log(file, fileList);
			},
			handleBefore(file){
        console.log(file);				
			},
      handlePreview(file) {
        console.log(file);
      }
  }
};
</script>