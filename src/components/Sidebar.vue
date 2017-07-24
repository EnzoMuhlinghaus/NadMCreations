<template>
  <div class="sidebar">
    <a href="#" class="sidebar__close">Menu <i class="icon-cross"></i> </a>
    <h1 class="logo"><a href="/">{{ site_name }}</a></h1>
    <ul>
      <li class="active"><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <h3 class="sidebar-lead">Connect with us</h3>
    <p class="sidebar__social-icons">
      <a href="#"><i class="icon-twitter"></i></a>
      <a href="#"><i class="icon-facebook"></i></a>
      <a href="#"><i class="icon-instagram"></i></a>
      <a href="#"><i class="icon-dribbble"></i></a>
      <a href="#"><i class="icon-youtube"></i></a>
    </p>
    <i class="fa fa-camera-retro fa-3x"></i>

    <!--<svg id="sidebar__wave" class="sidebar__wave" width="100%" height="100%" viewBox="0 0 200 900" version="1.1" preserveAspectRatio="none">-->
      <!--<path-->
        <!--d="M200,0c0,0 -200,46.405 -200,177c0,130.595 126.228,90.241 149,287c22.772,196.759 51,436 51,436l32,0l-4,-900l-28,0Z"-->
        <!--data-to="M0,0c0,0 0,46.405 0,177c0,130.595 1.152,98.101 0,296c-1.153,198.07 0,427 0,427l200,0l0,-900l-200,0Z"/>-->
    <!--</svg>-->
  </div>

</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      site_name: 'NADMCREATIONS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./../assets/styles/sidebar.scss" lang="scss"></style>
