import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { MessageProvider, MessageList, ChatList, Header } from ".."
import styles from "./layout.module.css"

export class Layout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={["/chat/:roomId"]}>
            {(params) => (
              <MessageProvider {...params}>
                {() => (
                  <div className={styles.wrapper}>
                    <Header />
                    <ChatList />
                    <MessageList />
                  </div>
                )}
              </MessageProvider>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
