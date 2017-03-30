export const createUser = userParams => {
  let userObj = userAdapter.createUser(userParams)
  return {
    type: "CREATE_USER",
    payload: userObj
  }
}

import userAdapter from './adapters/userAdapter'

const createUser = params => {
  let userObj =
}
