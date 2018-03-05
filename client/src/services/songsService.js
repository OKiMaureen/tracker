// backend
import api from '@/services/api'

export default {
  // get all songs - sends get request to index endpoint on express server
  index (search) {
    return api().get('songs', {
      params: {
        search: search
      }
    })
  },
  // show all songs - sends post request to songs endpoint on express server and pass the songs
  post (song) {
    return api().post('songs', song)
  },
  // view song  - sends get request to songs/songId endpoint on express server and pass the song
  show (songId) {
    return api().get(`songs/${songId}`)
  },
  // update song  - sends put request to songs/songId endpoint on express server and pass the song update
  put (song) {
    return api().put(`songs/${song.id}`, song)
  }
}
