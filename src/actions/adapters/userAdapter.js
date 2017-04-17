import axios from './config'
import { browserHistory } from 'react-router'
import { decodeCookie } from './cookieAdapter'


export default {
  createUser: params => {
    let paramsHash = { user: {
      firstName: params.firstName,
      lastName: params.lastName,
      username: params.username,
      email: params.email,
      password: params.password,
      passwordConfirmation: params.passwordConfirmation
    }}
    return axios.post('/users', paramsHash).then(resp => {
      axios.auth = { jwt: resp.data.jwt }
      document.cookie = `jwt=${resp.data.jwt}; max-age=31536000; path=/;`
      browserHistory.push('/')
      return resp.data.user
    })
  },
  loginUser: params => {
    let creds = {
      email: params.email,
      password: params.password,
    }
    return axios.post('/login', creds).then(resp => {
      if (resp.status === 200) {
      axios.auth = { jwt: resp.data.jwt }
      document.cookie = `jwt=${resp.data.jwt}; max-age=31536000; path=/;`
      browserHistory.push('/')
      return resp.data.user
    } else {
      return null
    }
    })
  },

  logoutUser: () => {
    browserHistory.push("/")
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    axios.auth = { jwt: undefined }
  },

  getCurrentUser: () => {
    let c = decodeCookie(document.cookie)
    return axios.post('/auth', {jwt: c}).then(resp => {
      return resp.status === 200 ? resp.data : {}
    })
    // post jwt to server, get back either a 200 response with user, or a 401 that pushes
  },
}
