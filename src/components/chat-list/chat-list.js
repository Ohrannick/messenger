import React from "react"
import { Chat } from "./chat"
import styles from "./chat-list.module.css"

// @TODO сделать propTypes
export class ChatList extends React.Component {
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }

  handleListItemClick = (event, index) => {
    this.setState({
      selectedIndex: index,
    })
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
      <div className={styles.chat}>
        {chats.map((chat, index) => (
          // @TODO доделать Chat
          <Chat title={chat} key={index} selected={selectedIndex} />
        ))}
      </div>
    )
  }
}
