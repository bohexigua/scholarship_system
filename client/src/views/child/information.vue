<template>
	<div class="content">
		<div class="left">
			<p>姓名:{{this.data.name}}</p>
			<p>性别:{{this.data.sex}}</p>
			<p>出生年月:{{this.data.brithday}}</p>
			<p>学号:{{this.data.id}}</p>
			<p>民族:{{this.data.mz}}</p>
			<p>政治面貌:{{this.data.zzmm}}</p>
			<p>校内住址:{{this.data.saddress}}</p>
			<p>家庭住址:{{this.data.faddress}}</p>
			<p>家庭联系电话:{{this.data.ftel}}</p>
			<p>家庭收入来源:{{this.data.jtsrly}}</p>
			<p>平均学分绩点:{{this.data.pjxfjd}}</p>
			<p>体测成绩:{{this.data.tccj}}</p>
		</div>
		<div class="center">
			<p>入学时间:{{this.data.start}}</p>
			<p>学院:{{this.data.xy}}</p>
			<p>专业:{{this.data.zy}}</p>
			<p>年级:{{this.data.grade}}</p>
			<p>班级:{{this.data.class}}</p>
			<p>贫困建档等级:{{this.data.pkjddj}}</p>
			<p>联系电话:{{this.data.tel}}</p>
			<p>曾获何种奖励:{{this.data.jl}}</p>
			<p>曾获何种资助:{{this.data.hzzz}}</p>
			<p>申请奖学金理由:{{this.data.sqjly}}</p>
			<p>申请助学金理由:{{this.data.sqzly}}</p>
		</div>
	</div>
</template>

<script>
import { getUserInfo } from '../../api/api';
export default {
  beforeMount(){
    const token=sessionStorage.getItem('token');
    getUserInfo({ token }).then(res=>{
      this.data = res.data;
    })
  },

  data() {
    return {
      data: {
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
        pkjddj: "jksaljkd",
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
  }
};
</script>

<style scoped lang="scss">
	@import '~scss_vars';
  .content{
    display: flex;
    .left{
      flex: 4;
    }
    .center{
      flex: 4;
    }
    .right{
      flex: 1;
    }
  }
</style>