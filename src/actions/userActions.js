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
  debugger
  return {
    type: "LOGIN_USER",
    payload: userObj
  }
}

export const logoutUser = params => {
  let resp = userAdapter.logoutUser(params)
  return {
    type: "LOGOUT_USER",
    payload: resp
  }
}
