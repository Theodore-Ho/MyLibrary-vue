<template>
    <div class="layout">
        <Menu class="menuCSS"/>
        <Content class="contentCSS"/>
    </div>
  
</template>

<script>
import Menu from './menu.vue'
import Content from './content.vue'
export default {
    components:{
        Menu,
        Content
    }
}
</script>

<style lang="less" scoped>
.layout{
    .menuCSS{
        width: 200px;
        background: rgb(156, 214, 248);
        position: fixed;
        top: 0;
        bottom: 0;
    }
    .contentCSS{
        margin-left: 200px;
    }
}
</style>