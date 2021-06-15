import PropTypes from "prop-types"
import React from "react"
import styles from "./message.module.css"

export class Message extends React.Component {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string,
      value: PropTypes.string,
      date: PropTypes.date,
    }),
  }

  render() {
    const { message } = this.props
    const { author, value, date } = message

    return (
      <div
        className={styles.item}
        style={{
          alignSelf: author === "Bot" ? "flex-start" : "flex-end",
        }}
      >
        <h3>{value}</h3>
        <h3>
          {author +
            " - " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds()}
        </h3>
      </div>
    )
  }
}
