<template>
  <div class="creations" v-masonry transition-duration=".3s" item-selector=".item">
      <div v-masonry-tile v-for="creation in creations" class="item">
        <img :src="creation.image" alt="">
        <p>{{ creation.title }}</p>
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
    mounted () {
      let self = this
      axios.get('https://nadmcreations.com/api/creations').then(function (response) {
        self.creations = response.data
      })
    }
  }
</script>

<style scoped>

  .creations {
    width: 75%;
    margin: 0 auto;
  }

  /* clearfix */
  .creations:after {
    content: '';
    display: block;
    clear: both;
  }

  /* ---- grid-item ---- */

  .item {
    margin: 10px 10px 20px 10px;
    background: #fff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    width: 280px;
    float: left;
  }

  .item img{
    width: 100%;
    height: auto;
  }

</style>
