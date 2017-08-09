<template>
  <div>
    <sidebar :awake=awake @woken="onWake"></sidebar>
    <transition name="fade" appear>
      <div class="top">
        <a class="top__logo" href="/">{{ site_name }}</a>
        <a href="#" class="top__menu-btn" @click="awake = !awake">Menu <i class="fa fa-bars"></i></a>
      </div>
    </transition>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'

  export default {
    name: 'top',
    components: {
      Sidebar
    },
    methods: {
      onWake (value) {
        this.awake = value
      }
    },
    data () {
      return {
        awake: false,
        site_name: 'NADMCREATIONS'
      }
    }
  }
</script>

<style src="./../assets/styles/top.scss" lang="scss" scoped></style>
