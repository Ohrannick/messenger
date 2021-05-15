import React from "react"
import ReactDOM from "react-dom"

const messages = ["Привет", "React!", "Как дела?"]

const Message = ({ message }) => {
  return (
    <React.Fragment>
      <h1>{message}</h1>
    </React.Fragment>
  )
}

const MessageField = ({ messages }) => {
  return messages.map((message, index) => (
    <Message message={message} key={index} isVisible={true} />
  ))
}

const ButtonAddText = () => {
  return (
    <button
      className="add-text"
      onClick={() => {
        alert("Нормально")
      }}
    >
      Press Me
    </button>
  )
}

const AllPage = () => {
  return (
    <div>
      <MessageField messages={messages} />
      <ButtonAddText />
    </div>
  )
}

ReactDOM.render(<AllPage />, document.getElementById("root"))
