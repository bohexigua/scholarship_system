<template>
	<div class="content">
			<p>学生:{{this.data.name}}</p>
			<p>班级:{{this.data.class}}</p>
			<p>生源地:{{this.data.syd}}</p>
			<p>家庭收入来源:{{this.data.jtsrly}}</p>
			<p>人均年收入:{{this.data.rjnsr}}</p>                                              
			<p>学生陈述认定理由:{{this.data.reason}}</p>  
            <el-button type="primary" v-if="this.data.done !== '已处理'" @click="onSubmit('不同意')">不同意</el-button>
            <el-button type="primary" v-if="this.data.done !== '已处理'" @click="onSubmit('一般困难')">一般困难</el-button>
            <el-button type="primary" v-if="this.data.done !== '已处理'" @click="onSubmit('困难')">困难</el-button>
            <el-button type="primary" v-if="this.data.done !== '已处理'" @click="onSubmit('特殊困难')">特殊困难</el-button>
		</div>
</template>

<script>
import { setPovertyLevelDone } from "../../api/api";
export default {
  beforeMount() {
    const index = this.$route.query.index;
    this.data = this.$route.query.rows[index];
  },
  data() {
    return {
      token: sessionStorage.getItem("token"),
      data: {
      }
    };
  },
  methods: {
    onSubmit(str) {
      const user_name = this.data.user_name;
      const done = str;
      const token = this.token;
      setPovertyLevelDone({ user_name, token, done }).then(res => {
        if (res.success) this.$router.push({ path: "/teacherDocumentSh" });
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