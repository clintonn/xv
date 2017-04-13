import axios from './config'
import { browserHistory } from 'react-router'
import { decodeCookie } from './cookieAdapter'

export default {
  createResume: (user, cookie) => {
    let jwt = decodeCookie(cookie)
    return axios.post('/resumes', {jwt: jwt, user: user.id}).then(resp => {
      return {
        userID: resp.data.userId,
        hashURL: resp.data.hashUrl
      }
    })
  }
}
