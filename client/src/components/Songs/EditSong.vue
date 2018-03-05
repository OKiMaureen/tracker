<template>
<v-layout>
    <v-flex xs6>
        <panel title= "song metadata">
            <v-text-field required :rules="[required]" label="Title" v-model="song.title"></v-text-field>
            <v-text-field required :rules="[required]" label="Artist" v-model="song.artist"></v-text-field>
            <v-text-field required :rules="[required]" label="Genre" v-model="song.genre"></v-text-field>
            <v-text-field required :rules="[required]" label="Album" v-model="song.album"></v-text-field>
            <v-text-field required :rules="[required]" label="Album Image Url" v-model="song.albumImageUrl"></v-text-field>
            <v-text-field required :rules="[required]" label="YouTube Id" v-model="song.youtubeId"></v-text-field>
        </panel>
    </v-flex>
    <v-flex xs6>
        <panel title= "song structure">
            <v-text-field required :rules="[required]" label="Lyrics" v-model="song.lyrics" multi-line></v-text-field>
            <v-text-field required :rules="[required]" label="Tab" v-model="song.tab" multi-line></v-text-field>
        </panel>
        <div class="danger-alert" v-if="error">{{error}}</div>
         <v-btn class ="purple lighten-2" dark @click="save">Save Song</v-btn>
    </v-flex>
</v-layout>
</template>
<script>
import songsService from '@/services/songsService'
export default{
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      // required 'value' must be true(!!value) or it shows Required
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    // method save that takes error as null
    async save () {
      this.error = null
      // if keys have values(text area filled)
      const areAllFieldsFilledIn = Object
        // song object returns an array of the keys
        .keys(this.song)
        // checks that every key in the array is true (if it has value)
        .every(key => !!this.song[key])
      // if keys are still null(no value)
      if (!areAllFieldsFilledIn) {
        // returns an error
        this.error = 'please fill in required fields.'
        return
      }
      // gets songid from route params and stores in 'const songid'
      const songId = this.$store.state.route.params.songId
      try {
        // call songService.put method to insert song to given route
        await songsService.put(this.song)
        // go to song/songid route
        this.$router.push({name: 'song', params: { songId: songId }})
      } catch (err) {
        console.log(err)
      }
    }
  },
  // when page is mounted
  async mounted () {
    try {
      // grab song id from route params
      const songId = this.$store.state.route.params.songId
      // song object based on given id is shown 
      this.song = (await songsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>
</style>
