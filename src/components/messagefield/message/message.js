/* eslint-disable import/no-default-export */
import React from "react"

class Message extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.message}</h1>
      </React.Fragment>
    )
  }
}

export default Message
