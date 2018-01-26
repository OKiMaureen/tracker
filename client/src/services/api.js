// set up connection to the backend
// import axios module
import axios from 'axios'

// exporting api module (returns a connector)
export default () => {
  return axios.create({ baseURL: `http://localhost:8081/` })
}
