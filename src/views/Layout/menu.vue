<template>
    <div>
        <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="rgb(156, 214, 248)"
      text-color="#000"
      active-text-color="#FFF"
      :collapse="isCollapse"
      router
      >
      <el-menu-item>
        <span slot="title">Book Manage System</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="/books">
        <i class="el-icon-collection"></i>
        <span slot="title">Books</span>
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Category</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/category/category-yunnan">Yunnan</el-menu-item>
          <el-menu-item index="/category/category-local">Local</el-menu-item>
          <el-menu-item index="/category/category-foreign">Foreign</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </div>
</template>

<script>
export default {
    props:['isCollapse'],
    data(){
      return{

      }
    }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>