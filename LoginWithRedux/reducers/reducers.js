import { combineReducers } from 'redux'
import { LOGIN, LOGOUT }   from '../actions/actions.js'
import {post} from 'axios'
const axios = require('axios')
//axios.defaults.headers.common['Content-Type'] = 'application/json'
//var request = require('superagent');

function loginActions(state = {id: 0, username: '', status: -1}, action) {
  console.log("Action: " + JSON.stringify(action, null, 2))
  const url = "http://dflux-user-profile-dev.dev.cf.private.springer.com"

  switch (action.type) {
    case LOGIN:
      if(state.status == 0) {
        console.log(state.username + " is already logged in !")
        return state
      }
      var result = true
      console.log('UserProfileService.login result: ' + JSON.stringify(result, null, 2))
      return { id: action.id, username: action.username, status: 0 }

    case LOGOUT:
      if(state.status != 0) {
        console.log(state.username + " is already logged out !")
        return state
      }

      console.log('Calling UserProfileService.logout ...')
      const result1 = true; //UserProfileService.logout call
      console.log('UserProfileService.logout result:' + result1)
      return { id: action.id, username: action.username, status: 1 }
    default:
      return state
  }
}

const actionReducers = combineReducers({ loginActions })

export default actionReducers
