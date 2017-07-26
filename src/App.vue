<template>
  <div id="app">
    <top></top>
    <sidebar></sidebar>
    <br>
    <router-view></router-view>
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

