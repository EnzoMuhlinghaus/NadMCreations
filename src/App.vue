<template>
  <div id="app">
    <div class="container">
      <top></top>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Top from '@/components/Top'

export default {
  name: 'app',
  components: {
    Top
  }
}
</script>

<style src="./assets/styles/base.scss" lang="scss"></style>

