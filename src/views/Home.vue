<template>
  <div class="home">
    <!-- 轮播 -->
    <section class="swiper-section">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <!-- 细节展示 -->
    <section class="preview-section">
      <ul class="preview-list list clearfix">
        <li class="item preview-list_item">1</li>
        <li class="item preview-list_item">2</li>
        <li class="item preview-list_item">3</li>
      </ul>
    </section>
    <!-- 视频 -->
    <section class="video-section">
      <ul class="video-list list clearfix">
        <li class="item video-list_item">
          <video controls>
            <source src="@/assets/videos/movie.mp4" type="video/mp4">
            您的浏览器不支持 HTML5 video 标签。
          </video>
          <p class="des">测试文本测试文本测试文本</p>
        </li>
        <li class="item video-list_item">
          <video controls>
            <source src="@/assets/videos/movie.mp4" type="video/mp4">
            您的浏览器不支持 HTML5 video 标签。
          </video>
          <p class="des">测试文本测试文本测试文本</p>
        </li>
        <li class="item video-list_item">
          <video controls>
            <source src="@/assets/videos/movie.mp4" type="video/mp4">
            您的浏览器不支持 HTML5 video 标签。
          </video>
          <p class="des">测试文本测试文本测试文本</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        // effect: 'fade',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import url('~swiper/dist/css/swiper.css');
  .swiper-slide {
    height: 500px;
    background-position: center;
    background-size: cover;
    &.slide-1 {
      background-image: url('~@/assets/images/banner1.png')
    }
    &.slide-2 {
      background-image: url('~@/assets/images/banner1.png')
    }
    &.slide-3 {
      background-image: url('~@/assets/images/banner1.png')
    }
  }
  .list {
    width: $mainWidth;
    margin: 50px auto;
    .item {
      float: left;
      width: 410px;
      height: 210px;
      margin-right: 15px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .preview-list {
    &_item {
      background-image: url('~@/assets/images/banner1.png');
      &:hover {
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
      }
    }
  }
  .video-list {
    &_item {
      height: auto;
      video {
        width: 100%;
        height: 210px;
      }
      .des {
        line-height: 16px;
        text-align: center;
      }
    }
  }
</style>
