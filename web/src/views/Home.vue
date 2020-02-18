<template>
  <div class="home">
  <swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide>
      <img src="../assets/images/chen.jpg" alt="" class="w-100">
      </swiper-slide>
      <swiper-slide>
      <img src="../assets/images/jiesika.jpg" alt="" class="w-100">
      </swiper-slide>
      <swiper-slide>
      <img src="../assets/images/liskam.jpg" alt="" class="w-100">
      </swiper-slide>
      <swiper-slide>
      <img src="../assets/images/swire.jpg" alt="" class="w-100">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pd-1" slot="pagination"></div>
  </swiper>
  <!-- 幻灯片结束 -->
  <div class="nav-icon bg-white mt-3 text-center pt-3 text-grey">
    <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">功能一</div>
        </div>
    </div>
    <div class="bg-light py-2 fs-sm">
      <i class="sprite sprite-arrow"></i>
      <span> 收起</span>
    </div>

    
  </div>
  <!-- nav-icon结束 -->

  <m-card icon="iconfonticon-dingwe" title="新闻资讯">
    <!-- 导航标签 -->
      <div class="nav jc-between">

        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
        
      </div>
      <!-- 具体内容 -->
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="n in 5" :key="n">
            <div v-for="n in 5" :key="n" class="py-2" d-flex>
              <span>[新闻]</span>
              <span>|</span>
              <span class="flex-1">“烘炉示岁”活动即将开启</span>
              <span>日期</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
  </m-card>


  <m-card icon="card-hero" title="干员列表">

  </m-card>



  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>

  <div>1</div>
  <div>1</div>
  



</div>
  
</template>

<script>


export default {
  data(){
    return{
      swiperOption: {
        autoplay: true,
          pagination: {
            el: '.pagination-home'
          }
        },
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
  .pagination-home{
    .swiper-pagination-bullet{
      opacity: 1;
      border-radius: 0.1538rem;
      background: map-get($colors , "white");
      &.swiper-pagination-bullet-active{
        background: map-get($colors, "info");
      }
    }
  }
  .nav-icon{
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item{
      width: 25%;
      border-left: 1px solid $border-color;
      &:nth-child(4n+1){
        border-left: none;
      }
    }
  }
  // .card{
  //   .card-header{
  //   }
  //   .card-body{
  //     border-top: 1px solid $border-color;
  //   }

  // }
  
</style>
