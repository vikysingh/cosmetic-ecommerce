import React from "react"

import PropTypes from "prop-types"

export default function BigLabel({ text }) {
    return (
        <h2 className="titleHeading" > {text } </h2>
    )
}

BigLabel.propTypes = {
    text: PropTypes.string.isRequired
}