import React from "react"
import ReactDOM from "react-dom"
import MessageField from "./components/messagefield/messagefield"

const render = () => {
  ReactDOM.render(
    <MessageField messages={this.messages} />,
    document.getElementById("root"),
  )
}

render()
