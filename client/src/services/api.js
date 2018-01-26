// import axios module
import axios from 'axios'

// exporting api module
export default () => {
  return axios.create({ baseURL: `http://localhost:8081/` })
}
