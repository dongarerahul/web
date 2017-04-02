import { combineReducers } from 'redux'
import { LOGIN } from './actions.js'

function todo(state, action) {
  switch (action.type) {
    case LOGIN:
      loginResult = true; //UserProfileService.login(action.username, acton.password)
      return { id: action.id, result: loginResult}
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case LOGIN:
      result = todo(undefined, action); //login service call
      return [...state, result]
    default:
      return state
  }
}

const todoApp = combineReducers({ todos })
export default todoApp
