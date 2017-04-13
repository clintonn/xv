const initialState = {
  title: "",
  userID: undefined,
  hashURL: "",
  description: "",
  contactInfo: {
    phone: undefined,
    site: "",
    email: "",
    twitter: "",
    linkedIn: "",
  },
  works: [
    {
      position: "",
      company: "",
      monthStart: undefined,
      yearStart: undefined,
      monthEnd: undefined,
      monthEnd: undefined,
      description: ""
    }
  ],
  educations: [
    {
      degree: "",
      major: "",
      minor: "",
      institution: ""
    }
  ],
  skills: [],
  projects: [
    {
    	title: "",
      description: "",
      url: ""
    },
  ]
}

export default (resumeInEdit = initialstate, action) => {
  switch (action.type) {
    case "CREATE_RESUME":
      return {... resumeInEdit, hashURL: action.hashURL, userID: action.userID}
    default
      return resumeInEdit
  }
}
