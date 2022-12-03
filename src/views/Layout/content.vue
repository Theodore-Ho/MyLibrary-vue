<template>
    <div>
        <div class="header">
            <i v-if="!isCollapse" @click="collapseMenu" class="el-icon-d-arrow-left" id="icon"></i>
            <i v-else @click="collapseMenu" class="el-icon-d-arrow-right" id="icon"></i>
            Header Area</div>
            <router-view></router-view>
    </div>
</template>

<script>
export default {
    props:['isCollapse'],
    methods:{
        collapseMenu(){
            this.$emit('changeCollapse')
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    height: 60px;
    background-color: aqua;
    #icon{
        font-size: 30px;
    }
}
</style>