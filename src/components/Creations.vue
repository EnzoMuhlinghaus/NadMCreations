<template>
  <div class="creations">
    <h1>Créations</h1>
    <ul>
      <li v-for="creation in creations">
        <h3>{{ creation.title }}</h3>
        <img :src="creation.image" alt="">
      </li>
    </ul>
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
