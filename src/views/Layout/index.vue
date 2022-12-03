<template>
    <div class="layout">
        <Menu class="menuCSS" :isCollapse="isCollapse"/>
        <Content class="contentCSS" :class="{isActive:isCollapse}" @changeCollapse="changeCollapse" :isCollapse="isCollapse"/>
    </div>
  
</template>

<script>
import Menu from './menu.vue'
import Content from './content.vue'
export default {
    components:{
        Menu,
        Content
    },
    data(){
        return {
            isCollapse:false,
        }
    },
    methods:{
        changeCollapse(){
            this.isCollapse = !this.isCollapse;
        }
    }
}
</script>

<style lang="less" scoped>
.layout{
    .menuCSS{
        background: rgb(156, 214, 248);
        position: fixed;
        top: 0;
        bottom: 0;
    }
    .contentCSS{
        margin-left: 200px;
    }
    .isActive{
        margin-left: 64px;
    }
}
</style>