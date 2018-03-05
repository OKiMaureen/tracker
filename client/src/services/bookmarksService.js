// backend
import api from '@/services/api'

export default {
  // get all songs - sends get request to index endpoint on express server
  index (bookmark) {
    return api().get('bookmarks', {
      params: bookmark
    })
  },
  post (bookmark) {
    return api().post('bookmarks',bookmark)
  },
  delete (bookmarkId) {
    return api().delete(`bookmarks/${bookmarkId}`)
  }
}
