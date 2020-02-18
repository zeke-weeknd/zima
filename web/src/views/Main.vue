<template>
    <div>
        <!-- 顶部 -->
        <div class="topbar bg-black py-2 px-3 d-flex ai-center">
            <img src="../assets/projectIcon.jpg" alt="" height="30">
            <div class="px-2 flex-1">
                <div class="text-white d-flex">明日方舟</div>
                <div class="text-grey-1 d-flex fs-xxs">硬核塔防，产能不足</div>
            </div>
            <button type="button" class="btn bg-primary" >立刻下载</button>
        </div>
        <!-- 顶部 -->

        <!-- 顶部导航栏开始 -->
        <div class="bg-primary pt-3 pb-2">
            <div class="nav d-flex text-white jc-around nav-inverse pb-1">
                <div class="nav-item active">
                    <router-link to="/" tag="div" class="nav-link">首页</router-link>
                </div>   
                <div class="nav-item">
                    <router-link to="/" tag="div" class="nav-link">攻略中心</router-link>
                </div>   
                <div class="nav-item">
                    <router-link to="/" tag="div" class="nav-link">活动中心</router-link>
                </div>   
            </div>
        </div>
        <!-- 顶部导航栏结束 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>