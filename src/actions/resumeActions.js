import resumeAdapter from './adapters/resumeAdapter'

export const createResume = (user, jwt) => {
  let payload = resumeAdapter.createResume(user, jwt)
  return {
    type: "CREATE_RESUME",
    payload: payload
  }
}
