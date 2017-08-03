<template>
  <div class="creations" data-columns="4">
      <div v-for="creation in creations" class="column size-lof4">
        <h3>{{ creation.title }}</h3>
        <img :src="creation.image" alt="">
      </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'creations',
    data () {
      return {
        creations: []
      }
    },

    mounted: function () {
      let self = this
      axios.get('https://nadmcreations.com/api/creations').then(function (response) {
        self.creations = response.data
      })
    }
  }
</script>

<style scoped>

  ul{
    list-style: none;
    padding: 0;
  }

</style>
