<template>

  <div class="top">
    <a class="top__logo" href="/">{{ site_name }}</a>
    <a href="#" class="top__menu-btn">Menu <i class="fa fa-bars"></i></a>
  </div>

</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      site_name: 'NADMCREATIONS'
    }
  }
}
</script>

<style src="./../assets/styles/top.scss" lang="scss" scoped></style>
