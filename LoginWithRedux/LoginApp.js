import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginEvent, logoutEvent } from './actions/actions.js'

import LoginComponent from './components/LoginComponent.js'
import LoginStatusComponent from './components/LoginStatusComponent.js'

class LoginApp extends Component {

  render() {
    console.log("LoginApp->render: " + JSON.stringify(this.props, null, 2))
    const { dispatch, user, isLoggedIn } = this.props

    return(
      <div>
        <h1>D-Flux Login </h1>
        <LoginComponent
          onLoginClick = { (username, password) => dispatch(loginEvent(username, password)) }
          onLogoutClick = { (username) => dispatch(logoutEvent(username))}
        />
        <LoginStatusComponent status = {isLoggedIn} user = {user} />
      </div>
    )
  }
}

function select(state) {
  console.log("Selecting State: " + JSON.stringify(state, null, 2))
  return {
    user      : state.loginActions.username,
    isLoggedIn: state.loginActions.status
  }
}

export default connect(select)(LoginApp)
