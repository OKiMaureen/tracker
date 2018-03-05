<template>
 <panel title="Youtube Video">
    <youtube  :video-id="youtubeId" :player-width="500" :player-height="265"></youtube>
</panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
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
.youtube{
  width:100%;
  height:100%;
  margin: 0 auto;
  margin-left: 15%;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 10%;
}
</style>
