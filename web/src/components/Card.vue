<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex pt-1 ai-center pb-3">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont icon-menu"></i>
    </div>
    <div class="card-body pt-3 mt-3">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        title:{type: String,required: true},
        icon:{type: String,required: true}
        // icon-dingwe icon-iconfonticon-dingwe
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';
.card{
    border-bottom: 1px solid $border-color;
    .card-header{
        border-bottom: 1px solid $border-color;
    }
}
    
</style>