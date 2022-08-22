<template>
    <div>
        <div class="header">Header Area</div>
        <div class="content" style="height: 1200px">
            <router-view></router-view>
            <i class="el-icon-edit"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-delete"></i>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <font-awesome-icon icon="fa-solid fa-user-secret" />
            <font-awesome-icon icon="fa-solid fa-user-alien" />
            <i class="el-icon-upload"></i>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
    height: 60px;
    background-color: aqua;
}
</style>