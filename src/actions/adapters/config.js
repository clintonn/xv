import axios from 'axios'
const BASE = "http://localhost:3000/api/v1/"

const conn = axios.create({
  baseURL: BASE,
  timeout: 10000,
  headers: {
    "X-Key-Inflection": "camel"
  }
})

export default conn
