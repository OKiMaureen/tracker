<template>
<panel title='songs'>
       <v-btn  slot ="action" :to="{name: 'songs-create'}" class="purple dark-4" small dark absolute right middle fab>
         <v-icon>add</v-icon>
       </v-btn>
      <div class= "song" v-for='song in songs' v-bind:key="song.id">
        <v-layout>
          <v-flex xs6>
            <div class= "song-title">
              {{song.title}}
            </div>
            <div class= "song-artist">
              {{song.artist}}
            </div>
            <div class= "song-album">
              {{song.album}}
            </div>
            <v-btn class ="purple lighten-2" dark :to="{name: 'song',params: {songId: song.id }}">View</v-btn>
          </v-flex>
          <v-flex xs6>
            <img class ="album-image" :src ="song.albumImageUrl"/>
          </v-flex>
        </v-layout>
      </div>
</panel>
</template>

<script>
import songsService from '@/services/songsService'
export default{
  data () {
    return {
      songs: null
    }
  },
  watch: {
    // add watcher to search query string
    '$route.query.search': {
      // happens immediately
      immediate: true,
      // calls handler to take in value from query search string and assign it as content on index route (songs)
      async handler (value) {
        this.songs = (await songsService.index(value)).data
      }
    }
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
