import userAdapter from './adapters/userAdapter'

export const createUser = (params) => {
  let userObj = userAdapter.createUser(params)
  return {
    type: "CREATE_USER",
    payload: userObj
  }
}
