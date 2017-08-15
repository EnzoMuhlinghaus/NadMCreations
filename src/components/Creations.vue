<template>
  <transition name="longFade" appear>
    <div class="creations" v-masonry transition-duration=".5s" item-selector=".item" fit-width="true">
        <div v-masonry-tile v-for="creation in creations" class="item">
          <img :src="creation.image" :alt="creation.title" :title="creation.title">
          <p>{{ creation.description }}</p>
        </div>
    </div>
  </transition>
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
    methods: {
      url (value) {
        return 'https://nadmcreations.com/api/storage/app/media/' + value.image
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

<style src="./../assets/styles/creations.scss" lang="scss" scoped></style>
