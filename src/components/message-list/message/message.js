import PropTypes from "prop-types"
import React from "react"

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
        <hr />
      </div>
    )
  }
}
