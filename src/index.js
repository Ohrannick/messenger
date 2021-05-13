import React from "react"
import ReactDOM from "react-dom"

const Message = ({ message }) => {
  return (
    <React.Fragment>
      <h1>{message}</h1>
      <p>ABCdef</p>
    </React.Fragment>
  )
}

const MessageField = ({ messages }) => {
  return messages.map((message, index) => (
    <Message message={message} key={index} isVisible={true} />
  ))
}

ReactDOM.render(
  <MessageField messages={["test1"]} />,
  document.getElementById("root"),
)
