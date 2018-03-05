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
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill in required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await songsService.put(this.song)
        this.$router.push({name: 'song', params: { songId: songId }})
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await songsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>
</style>
