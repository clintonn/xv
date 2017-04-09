import axios from './config'
import { browserHistory } from 'react-router'
import { decodeCookie } from './cookieAdapter'


export default {
  createUser: params => {
    let paramsHash = { user: {
      firstName: params.firstName,
      lastName: params.lastName,
      userName: params.username,
      email: params.email,
      password: params.password,
      passwordConfirmation: params.passwordConfirmation
    }}
    return axios.post('/users', paramsHash).then(resp => {
      debugger
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
      // TODO: add error handling for non-200 responses
      axios.auth = { jwt: resp.data.jwt }
      document.cookie = `jwt=${resp.data.jwt}; max-age=31536000; path=/;`
      browserHistory.push('/')
      return resp.data.user
    })
  },

  logoutUser: () => {
    let c = decodeCookie(document.cookie)
    return axios.post('/logout', {jwt: c}).then(resp => {
      browserHistory.push("/")
      // TODO: add error handling for non-200 responses
      return (resp.status === 202 ? (
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT",
        axios.auth = undefined
      ) : null)
    })
  },
  getCurrentUser: () => {
    let c = decodeCookie(document.cookie)
    return axios.post('/auth', {jwt: c}).then(resp => {
      debugger
      return resp.status === 200 ? resp.data : {}
    })
    // post jwt to server, get back either a 200 response with user, or a 401 that pushes
  }
}
