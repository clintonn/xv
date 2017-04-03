import axios from './config'
import { browserHistory } from 'react-router'

export default {
  createUser: (params) => {
    let paramsHash = { user: {
      first_name: params.firstName,
      last_name: params.lastName,
      username: params.username,
      email: params.email,
      password: params.password,
      password_confirmation: params.passwordConfirmation
    }}
    axios.post('/users', paramsHash).then(resp => {
      axios.auth = { jwt: resp.data.jwt }
      browserHistory.push('/dashboard')
    })
  }
}
