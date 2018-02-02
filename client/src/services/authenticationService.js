// used to hit register endpoint
import api from '@/services/api'

// send post request to register endpoint on express server using specified parameter
export default {
  register (credentials) {
    return api().post('register', credentials)
  },
  // send post request to login endpoint on express server using specified parameter
  login (credentials) {
    return api().post('login', credentials)
  }
}
