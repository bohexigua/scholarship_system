<template>
	<div class="content">
			<p>名称:{{this.data.title}}</p>
			<p>金额:{{this.data.award}}</p>
			<p>要求分数:{{this.data.grade}}</p>
			<p>其他:{{this.data.content}}</p>
			<el-button type="primary">点击申请</el-button>
		</div>
</template>

<script>
import { getInform } from "../../api/api";
export default {
  beforeMount() {
	  const index = this.$route.query.index;
	this.data = this.$route.query.rows[index];
  },
  data() {
    return {
      data: {
        award: "",
        content: "",
        grade: "",
        titlt: "",
      }
    };
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