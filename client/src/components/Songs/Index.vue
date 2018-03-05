<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2" />
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import songsService from '@/services/songsService'
export default{
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    // do a request to the backend for all songs
    this.songs = (await songsService.index()).data
  }
}
</script>

<style scoped>
.song{
overflow: hidden;
}
.song-title{
font-size: 20px;
}
.song-artist{
font-size: 15px;
}
.song-genre{
  font-size: 10px;
}
.album-image{
  width:100%;
  height:100%;
  margin: 0 auto;
  margin-left: 15%;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 10%;
}
</style>
