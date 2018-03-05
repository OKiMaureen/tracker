<template>
<panel title='search'>
    <v-text-field label="Search by song title, artist, album, or  genre" v-model="search"></v-text-field>
</panel>
</template>

<script>
import _ from 'lodash'
export default{
  data () {
    return {
      search: ''
    }
  },
  watch: {
    // watch search value in route songs
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      // if it is not empty
      if (this.search !== '') {
        // add it to route query
        route.query = {
          search: this.search
        }
      }
      // go to songs route
      this.$router.push(route)
    }, 700),
    // add watcher to search query string
    '$route.query.search': {
      // happens immediately
      immediate: true,
      // calls handler to take in value from query search string and assign it as search value in input field
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
