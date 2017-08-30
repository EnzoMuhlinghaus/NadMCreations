<template>
  <div>
    <sidebar :awake=awake @woken="onWake"></sidebar>
    <!--<transition name="fade" appear>-->
      <div class="top">
        <h1 class="top__logo">
          <router-link :to="{name: 'Home'}" tag="a">{{ site_name }}</router-link>
        </h1>
        <!--<a href="#" class="top__menu-btn" @click="awake = !awake">Menu <i class="fa fa-bars"></i></a>-->
      </div>
    <!--</transition>-->
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
