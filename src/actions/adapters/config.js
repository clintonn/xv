import axios from 'axios'
const BASE = "http://localhost:3000/api/v1/"

const conn = axios.create({
  baseURL: BASE,
  timeout: 2000,
})

export default conn
