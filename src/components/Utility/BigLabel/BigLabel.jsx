import React from "react"

import styles from "./BigLabel.module.css"

import PropTypes from "prop-types"

export default function BigLabel({ text }) {
    return (
        <h1 id={styles.BIG_LABEL} > {text } </h1>
    )
}

BigLabel.propTypes = {
    text: PropTypes.string.isRequired
}