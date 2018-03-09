<template>
	<div class="content">
			<p>姓名:{{this.data.name}}</p>
			<p>生源地:{{this.data.sex}}</p>
			<p>班级:{{this.data.borth}}</p>
			<p>家庭人均年收入:{{this.data.id}}</p>
			<p>家庭收入来源:{{this.data.mz}}</p>
			<p>学生陈述认定理由:{{this.data.zzmm}}</p>
		</div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "haha",
        sex: "nan",
        borth: "1999-2-2",
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
		margin: 50px 70px;
		width: 500px;
		// text-align: center;
	}
</style>