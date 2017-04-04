const initialState = {
  currentUser: {},
  users: []
}

export default (users = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...users, currentUser: action.payload }
    default:
      return { ...users }
  }
}
