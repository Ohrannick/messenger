/* eslint-disable import/no-default-export */
import React from "react"
import Message from "./message/message"

class MessageField extends React.Component {
  state = {
    messages: ["Привет", "React!", "Как дела?"],
  }

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, "Нормально"] })
  }

  render() {
    const messageElement = this.state.messages.map((message, index) => (
      <Message message={message} key={index} isVisible={true} />
    ))

    return (
      <div>
        <button onClick={this.handleClick}>Press Me</button>
        {messageElement}
      </div>
    )
  }
}

export default MessageField
