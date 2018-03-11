<template>
	<div class="content">
			<p>姓名:{{this.data.name}}</p>
			<p>性别:{{this.data.sex}}</p>
			<p>平均学分绩点:{{this.data.pjxfjd}}</p>
			<p>班级:{{this.data.class}}</p>
			<p>曾获何种奖励:{{this.data.jl}}</p>
            <el-button type="primary" v-if="(this.data.result === '未处理')" @click="onSubmit('不同意')">不同意</el-button>
            <el-button type="primary" v-if="(this.data.result === '未处理')" @click="onSubmit('一等')">一等</el-button>
            <el-button type="primary" v-if="(this.data.result === '未处理')" @click="onSubmit('二等')">二等</el-button>
            <el-button type="primary" v-if="(this.data.result === '未处理')" @click="onSubmit('三等')">三等</el-button>
            <el-button type="primary" v-if="!(this.data.result === '未处理')">已审批</el-button>            
		</div>
</template>

<script>
import { setAwardDone } from "../../api/api";
export default {
  beforeMount() {
    const index = this.$route.query.index;
    this.data = this.$route.query.rows[index];
  },
  data() {
    return {
      token: sessionStorage.getItem("token"),
      data: {
        award: "3000",
        brithday: "1999-2-2",
        class: "hahaha",
        content: "每个年级10个名额",
        done: "未处理",
        faddress: "kflsajfklds",
        ftel: "2890890",
        grade: "2012",
        hzzz: "hdjkashfjdksa",
        id: "1111",
        inform_id: 95,
        jl: "fhjdsakhfjdskaf",
        jtsrly: "djkslajfkdls;a",
        mz: "han",
        name: "haha",
        pjxfjd: "34.33",
        poverty_level: "1",
        saddress: "ueiwhfjaklfjkdls",
        sex: "nan",
        sqjly: "jdkafhjdska",
        sqzly: "hfjdksahfjk",
        start: "2011-1-3",
        submit: 1,
        tccj: "233",
        tel: "1213789",
        title: "勤奋奖学金1",
        type: 1,
        user_name: 123,
        xy: "hjkasdfd",
        zy: "hahaha",
        zzmm: "dy"
      }
    };
  },
  methods: {
    onSubmit(str) {
      const user_name = this.data.user_name;
      const result = str;
      const token = this.token;
      const aid = this.data.aid;
      setAwardDone({ user_name, token, result, aid}).then(res => {
        if (res.success) this.$router.push({ path: "/teacherJiangxuejinSh" });
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "~scss_vars";
.content {
  margin: 50px 70px;
  width: 500px;
  // text-align: center;
}
</style>