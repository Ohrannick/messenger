import React from "react"

export class MessageProvider extends React.Component {
  state = {
    conversations: [
      { title: "room1", value: "" },
      { title: "room2", value: "" },
      { title: "room3", value: "" },
    ],
    messages: {
      room1: [{ author: "User", message: "Привет !", date: new Date() }],
      room2: [],
      room3: [],
    },
  }

  handleChangeValue = (event) => {
    const { match } = this.props
    const { params } = match

    const {
      target: { value },
    } = event

    this.setState({
      conversation: this.conversation.map((conversation) => {
        if (params.roomId === conversation.title) {
          return { ...conversation, value }
        }
        return conversation
      }),
    })
  }

  sendMessage = ({ author, message }) => {
    if (!message) {
      return
    }

    const { messages } = this.state
    const { match } = this.props
    const { params } = match
    const newMessage = { author, message, date: new Date() }

    this.setState({
      messages: {
        ...messages,
        [params.roomId]: [...(messages[params.roomId] || []), newMessage],
      },
    })
  }

  componentDidUpdate() {}

  render() {
    const { children, match } = this.props
    const { params } = match

    const { conversations, messages } = this.state

    const state = {
      conversations,
      messages: messages[params.roomId] || [],
      value:
        conversations.find(
          (conversations) => conversations.title === params.roomId,
        )?.value || "",
    }

    const actions = {
      sendMessage: this.sendMessage,
      handleChangeValue: this.handleChangeValue,
    }

    return children([state, actions])
  }
}
