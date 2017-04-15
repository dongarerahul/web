import React, { Component, PropTypes } from 'react'

export default class LoginComponent extends Component {
  render() {
    return (
      <div className="col-sm-8 col-sm-offset-2">
        <input type="text" ref='username' />
        <div />
        <input type="password" ref='password' />
        <div />
        <button onClick = {(event) => this.handleLogin(event)} >
          Login
        </button>
        <button onClick = {(event) => this.handleLogout(event)} >
          Logout
        </button>
      </div>
    )
  }

  handleLogin(event) {
    console.log("Login Button Triggered Event: ")
    const username = this.refs.username.value.trim()
    const password = this.refs.password.value.trim()
    this.props.onLoginClick(username, password)
    this.refs.password.value = ''
  }

  handleLogout(event) {
    const username = this.refs.username.value.trim()
    this.props.onLogoutClick(username)
  }
}
