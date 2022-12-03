<template>
  <div class="content">
    <div class="header">
      <el-input v-model="input" placeholder="Please input something"></el-input>
      <el-button type="primary">Search</el-button>
      <el-button type="primary">Add</el-button>
    </div>
    <div class="wrapper">
      <el-table
      :data="tableData"
      border>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      input:"",
      tableData:[]
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  margin: 20px;
}
.header{
  display: flex;
  button{
    margin-left: 20px;
  }
}
.wrapper{
  margin: 20px 0;
}
</style>