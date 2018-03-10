<template>
	<div class="content">
			<p>姓名:{{this.data.name}}</p>
			<p>生源地:{{this.data.syd}}</p>
			<p>班级:{{this.data.class}}</p>
			<p>家庭人均年收入:{{this.data.rjnsr}}</p>
			<p>家庭收入来源:{{this.data.jtsrly}}</p>
			<p>学生陈述认定理由:{{this.data.reason}}</p>
		</div>
</template>

<script>
import { getPovertyLevel } from '../../api/api';
export default {
  beforeMount(){
    const token=sessionStorage.getItem('token');
    getPovertyLevel({ token }).then(res=>{
      this.data = res.data;
    })
  },
  data() {
    return {
      data: {
        name: "",
        syd: "",
        class:'hdjfka',
        rjnsr: "1111",
        jtsrly: "han",
        reason: "dy"
      }
    };
  }
};
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	.content{
		margin: 50px 70px;
		width: 500px;
		// text-align: center;
	}
</style>