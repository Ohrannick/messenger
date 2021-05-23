import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { Layout } from "./components"
import styles from "./index.module.css"

const App = () => {
  // cделал Layout
  return <Layout />
}

const theme = createMuiTheme({})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div>
      <App />
    </div>
  </ThemeProvider>,
  document.getElementById("root"),
)
