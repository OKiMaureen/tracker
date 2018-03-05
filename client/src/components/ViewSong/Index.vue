<template>
    <div>
    <v-layout>
        <v-flex xs6>
          <song-metadata :song='song'/>
        </v-flex>
        <v-flex xs6 class="ml-2">
          <you-tube :youtubeId='song.youtubeId'/>
        </v-flex>
    </v-layout>
    <v-layout>
        <v-flex xs6 class="mt-5">
           <lyrics :song ='song'/>
        </v-flex>

         <v-flex xs6 class="ml-2 mt-5">
           <tab :song ='song'/>
        </v-flex>
    </v-layout>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import songsService from '@/services/songsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongHistoryService from '@/services/SongHistoryService'

export default{
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await songsService.show(songId)).data
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  }
}
</script>
<style scoped>

</style>
