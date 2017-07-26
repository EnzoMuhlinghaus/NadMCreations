<template>
  <div id="app">
    <h1>Sidebar</h1>
    <sidebar></sidebar>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: { Sidebar }
}
</script>

<style src="./assets/styles/base.scss" lang="scss" scoped></style>

