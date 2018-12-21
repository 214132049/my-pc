<template>
  <div id="app">
    <header class="header clearfix">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt>
      </div>
      <TopNav class="top-nav"></TopNav>
    </header>
    <main class="main-content">
      <router-view/>
    </main>
    <footer class="footer"></footer>
  </div>
</template>
<script>
import TopNav from '@/components/TopNav'

export default {
  name: 'Root',
  components: {
    TopNav
  }
}
</script>

<style lang="scss">
  @import url(./assets/styles/reset.css);
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    min-width: $mainWidth;
    .header {
      width: $mainWidth;
      height: 80px;
      line-height: 80px;
      text-align: center;
      margin: 0 auto;
      .logo {
        box-sizing: border-box;
        float: left;
        width: 80px;
        height: 100%;
        margin-left: 20px;
        padding: 8px;
      }
      .top-nav {
        float: right;
        margin-left: 100px;
      }
    }
  }
</style>
