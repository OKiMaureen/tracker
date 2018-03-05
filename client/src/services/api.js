// set up connection to the backend
// import axios module
import axios from 'axios'
import store from '@/store/store'

// exporting api module (returns a connector)
export default () => {
  return axios.create({ baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
