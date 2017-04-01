export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

let token = 0

export function loginEvent(username, password) {
  console.log("Creating Login Event !")
  return {
    type: LOGIN,
    id: ++token,
    username: username,
    password: password
  }
}

export function logoutEvent(username) {
  console.log("Creating Logout Event !")
  token = 0
  return {
    type: LOGOUT,
    id: ++token,
    username: username
  }
}
