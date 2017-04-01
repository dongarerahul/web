import React, { Component, PropTypes } from 'react'

export default class LoginStatusComponent extends Component {
  render() {
    //console.log("Rendering LoginStatusComponent : " + JSON.stringify(this.props, null, 2))
    var loggedInStatus = this.props.status == 0 ? "Logged-In" : "Logged-Out"
    console.log("User " + this.props.user + " is " + loggedInStatus)

    return(
      <div>
        <br />
        <b>Status: </b> {loggedInStatus}
      </div>
    )
  }
}
