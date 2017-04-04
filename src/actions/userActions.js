import userAdapter from './adapters/userAdapter'

export const createUser = params => {
  let userObj = userAdapter.createUser(params)
  return {
    type: "CREATE_USER",
    payload: userObj
  }
}

export const loginUser = params => {
  let userObj = userAdapter.loginUser(params)
  return {
    type: "LOGIN_USER",
    payload: userObj
  }
}

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
    payload: undefined
  }
}
