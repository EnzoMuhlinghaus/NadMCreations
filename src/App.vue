<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="container">
      <top></top>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Top from '@/components/Top'

export default {
  name: 'app',
  components: {
    Sidebar,
    Top
  }
}
</script>

<style src="./assets/styles/base.scss" lang="scss"></style>

