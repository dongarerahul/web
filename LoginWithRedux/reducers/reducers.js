import { combineReducers } from 'redux'
import { LOGIN, LOGOUT }           from '../actions/actions.js'

function loginActions(state = {id: 0, username: '', status: -1}, action) {
  console.log("Current State: " + JSON.stringify(action, null, 2))

  switch (action.type) {
    case LOGIN:
      if(state.status == 0) {
        console.log(state.username + " is already logged in !")
        return state
      }
      console.log('Calling UserProfileService.login ...')
      var result = true; //UserProfileService.login call
      console.log('UserProfileService.login result: ' + result)

      return { id: action.id, username: action.username, status: 0 }

    case LOGOUT:
      if(state.status != 0) {
        console.log(state.username + " is already logged out !")
        return state
      }

      console.log('Calling UserProfileService.logout ...')
      var result = true; //UserProfileService.logout call
      console.log('UserProfileService.logout result:' + result)
      return { id: action.id, username: action.username, status: 1 }
    default:
      return state
  }
}

const actionReducers = combineReducers({ loginActions })

export default actionReducers
