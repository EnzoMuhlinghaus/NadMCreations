<template>
  <header class="sidebar awake" :class="{ awake: awake }" >
    <!--<a href="#" class="sidebar__close" @click="wake">Menu <i class="fa fa-times"></i> </a>-->
    <h1 class="sidebar__logo">
      <router-link :to="{name: 'Home'}" tag="a">{{ site_name }}</router-link>
    </h1>
    <nav class="sidebar__menu">
      <ul>
        <li>
          <router-link :to="{name: 'Home'}" tag="a">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'About'}" tag="a">About</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Contact'}" tag="a">Contact</router-link>
        </li>
      </ul>
    </nav>
    <p class="sidebar__social-icons social-icons">
      <a href="#"><i class="fa fa-camera-retro"></i></a>
      <a href="#"><i class="fa fa-camera-retro"></i></a>
      <a href="#"><i class="fa fa-camera-retro"></i></a>
      <a href="#"><i class="fa fa-camera-retro"></i></a>
    </p>

    <footer class="sidebar__credits">
      <small>© NadMCreations. All Rights Reserved. <br>
        Code et Design par <a href="https://enzomuhlinghaus.com" target="_blank">Enzo Muhlinghaus</a>
      </small>
    </footer>

    <svg class="sidebar__wave" width="100%" height="100%" viewBox="0 0 200 900" version="1.1"
         preserveAspectRatio="none">
      <path
        d="M200,0c0,0 -200,46.405 -200,177c0,130.595 126.228,90.241 149,287c22.772,196.759 51,436 51,436l32,0l-4,-900l-28,0Z"
        data-to="M0,0c0,0 0,46.405 0,177c0,130.595 1.152,98.101 0,296c-1.153,198.07 0,427 0,427l200,0l0,-900l-200,0Z"></path>
    </svg>
  </header>

</template>

<script>
  export default {
    name: 'sidebar',
    props: ['awake'],
    methods: {
      wake () {
        let mutableAwake = !this.awake
        this.$emit('woken', mutableAwake)
      }
    },
    data () {
      return {
        site_name: 'NADMCREATIONS'
      }
    }
  }
</script>

<style src="./../assets/styles/sidebar.scss" lang="scss" scoped></style>
