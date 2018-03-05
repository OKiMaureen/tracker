<template>
 <panel title="Song Metadata">
     <v-layout>
         <v-flex xs6>
             <div class= "song-title">
                 {{song.title}}
             </div>
             <div class= "song-artist">
                 {{song.artist}}
             </div>
             <div class= "song-genre">
                 {{song.genre}}
             </div>
               <v-btn class ="purple lighten-2" dark :to="{name: 'song-edit',params () {return {songId: song.id }}}">Edit</v-btn>
               <v-btn v-if="isUserLoggedIn && !bookmark" class ="purple lighten-2" dark @click="setAsBookmark">Bookmark</v-btn>
               <v-btn v-if="isUserLoggedIn && bookmark" class ="purple lighten-2" dark @click="setAsUnbookmark">Unbookmark</v-btn>
         </v-flex>
         <v-flex xs6>
             <div>
                <img class ="album-image" :src ='song.albumImageUrl'/>
             </div>
             <div>
                 {{song.album}}
             </div>
         </v-flex>
     </v-layout>
</panel>
</template>

<script>
import {mapState} from 'vuex'
import bookmarksService from '@/services/bookmarksService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await bookmarksService.index({
          songId: this.song.id,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await bookmarksService.post({
          songId: this.song.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async setAsUnbookmark () {
      try {
        await bookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
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
