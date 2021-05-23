import React from "react"
import styles from "./header.module.css"

export class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsGrO4lNvTaCmg-DVajdu80dbdVcW-ue5zg&usqp=CAU"
          alt="logo"
        />
      </header>
    )
  }
}
