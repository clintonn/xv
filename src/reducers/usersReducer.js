const initialState = {
  currentUser: {},
  users: []
}

export default (users = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...users, currentUser: action.payload  }
    default:
      return { ...users }
  }
}
