<template>
	<div>
        <el-select v-model="value" placeholder="请选择" @change="onChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="title"
      label="名称"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  
    </div>

</template>

<script>
import { getInform } from "../../api/api";
export default {
  beforeMount() {
    const token = sessionStorage.getItem("token");
        const type = this.value;    
    getInform({ token,type }).then(res => {
      this.tableData = res.data;
    });
  },
  methods: {
    deleteRow(index, rows) {
        const id = rows[index].id
      this.$router.push({
        path: "/adminjiangxuexq",
        query: { id }
      });
    },
    onChange(){
    const token = sessionStorage.getItem("token");        
        const type = this.value;
        getInform({ token,type }).then(res => {
      this.tableData = res.data;
    });
    }
  },
  data() {
    return {
      tableData: [
        {
          title: "jfklsadjfkdsal"
        }
      ],
      done: "待处理",
      options: [{
          value: '1',
          label: '奖学金'
        }, {
          value: '2',
          label: '助学金'
        }],
        value: '1'
    };
  }
};
</script>