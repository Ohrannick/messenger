import React from "react"
import { MessageList, ChatList, Header } from ".."
import styles from "./layout.module.css"

export class Layout extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <ChatList />
        <MessageList />
      </div>
    )
  }
}
