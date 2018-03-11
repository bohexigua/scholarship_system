<template>
  <el-carousel :interval="5000" arrow="always" height="100px">
    <el-carousel-item v-for="item in keys" :key="item">
      <h3 @click="onSubmit(item)">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 100px;
    text-align: center;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
import { getPovertyLevelAll } from "../../api/api";

export default {
    beforeMount(){
    const token=sessionStorage.getItem('token');
    getPovertyLevelAll({ token }).then(res=>{
      this.form = res.data;
      this.keys = Object.keys(this.form);
    })
  },
  data() {
    return {
      token:sessionStorage.getItem('token'),
      form:{},
      keys:[]
    };
  },
  methods: {
    onSubmit(item) {
        console.log('hjahah')
        const form = this.form[item]
      this.$router.push({
        path: "/adminpinkunxq",
        query: { form: form }
      });
    }
  }
};
</script>