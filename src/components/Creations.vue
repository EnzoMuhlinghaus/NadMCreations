<template>
  <div class="creations">
    <h1>Créations</h1>
    <ul>
      <li v-for="creation in creations">{{ creation.title }}</li>
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
      axios.get('url_api').then(function (response) {
        self.creations = response.data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
