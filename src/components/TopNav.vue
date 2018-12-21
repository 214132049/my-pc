<template>
  <nav class="index-nav">
    <div class="index-nav-frame clearfix">
      <div class="nav-line"></div>
      <div class="nav-small" tabindex="-1">
        <div class="nav-small-focus" tabindex="-1"></div>
        <img src="@/assets/images/icon.png">
      </div>
      <div class="index-nav-frame-line active" tabindex="-1">
        <router-link to="/">首页</router-link>
        <div class="index-nav-frame-line-focus" tabindex="-1"></div>
      </div>
      <div class="index-nav-frame-line" tabindex="-1">
        <router-link to="/about">关于StarGang</router-link>
        <div class="index-nav-frame-line-focus" tabindex="-1"></div>
      </div>
      <div class="index-nav-frame-line" tabindex="-1">
        <router-link to="/products">产品中心</router-link>
        <div class="index-nav-frame-line-focus" tabindex="-1"></div>
      </div>
      <div class="index-nav-frame-line" tabindex="-1">
        <router-link to="/news">近期活动</router-link>
        <div class="index-nav-frame-line-focus" tabindex="-1"></div>
      </div>
      <div class="index-nav-frame-line" tabindex="-1">
        <router-link to="/support">技术支持</router-link>
        <div class="index-nav-frame-line-focus" tabindex="-1"></div>
      </div>
      <div class="index-nav-frame-line" tabindex="-1">
        <router-link to="/contact">联系我们</router-link>
        <!-- <div class="index-nav-frame-line-center">
          <div class="index-nav-frame-line-li">第四页面1</div>
          <div class="index-nav-frame-line-li">第四页面2</div>
          <div class="index-nav-frame-line-li">第四页面3</div>
          <div class="index-nav-frame-line-li">第四页面4</div>
          <div class="index-nav-frame-line-li">第四页面5</div>
        </div>-->
        <div class="index-nav-frame-line-focus" tabindex="-1"></div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.index-nav {
  height: 100%;
}
.index-nav-frame-line {
  float: left;
  position: relative;
  display: block;
  outline: none;
}
.index-nav-frame-line a {
  box-sizing: border-box;
  color: #333333;
  display: block;
  height: 100%;
  padding: 0 20px;
  min-width: 100px;
  font-size: 16px;
  font-weight: 500;
}
.index-nav-frame-line:hover a {
  color: #b63b4d;
}
.index-nav-frame-line-center {
  opacity: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  width: 100%;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s; /* Firefox 4 */
  -o-transition: all 0.5s; /* Opera */
}
.index-nav-frame-line-li {
  width: 100%;
  font-weight: 500;
  text-align: center;
  background: white;
  color: #666666;
}
.index-nav-frame-line-li:hover {
  background: #444359;
  color: white;
}
.index-nav-frame-line-li:hover a {
  background: #444359;
  color: white;
}
.index-nav-frame-line-focus:focus {
  display: none;
}
.index-nav-frame-line:hover .index-nav-frame-line-center {
  height: auto;
  opacity: 1;
}

.nav-line {
  height: 80px;
  width: 100%;
  position: relative;
  display: none;
  outline: none;
}
.nav-small {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  display: none;
  outline: none;
}
.nav-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nav-small-focus {
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
}
.nav-small-focus:focus {
  display: none;
}
@media only screen and (max-width: 800px) {
  .index-nav-frame-line-li a {
    display: block;
    color: white;
  }
  .nav-line {
    display: block;
    border-bottom: 1px solid #eeeeee;
  }
  .nav-small {
    display: block;
  }
  .nav-small:focus ~ .index-nav-frame-line {
    height: auto;
    border-bottom: 1px solid #ccc;
  }
  .nav-small:focus .nav-small-focus {
    display: block;
  }
  .index-nav-frame {
    width: 100%;
  }
  .index-nav-frame-line {
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  .index-nav-frame-line-center {
    position: relative;
    background: #444359;
  }
  .index-nav-frame-line:hover .index-nav-frame-line-center {
    height: 0;
    opacity: 0;
  }
  .index-nav-frame-line-li {
    border-bottom: 1px solid #4b4a5e;
    color: #d9d9d9;
    background: #444359;
  }
  .index-nav-frame-line-li:hover {
    background: #b63b4d;
  }
  .index-nav-frame-line:focus {
    height: auto;
    border-bottom: 1px solid #ccc;
  }
  .index-nav-frame-line:focus > .index-nav-frame-line-center {
    height: auto;
    opacity: 1;
  }
  .index-nav-frame-line:focus .index-nav-frame-line-header {
    color: #b63b4d;
  }
  .index-nav-frame-line-focus {
    display: none;
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .index-nav-frame-line:focus .index-nav-frame-line-focus {
    display: block;
  }
}
</style>
