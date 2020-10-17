import React from "react"

import styles from "./TextContainer.module.css"

import PropTypes from "prop-types"

export default function TextContainer({ title, children }) {
    return <div className={styles.TEXT_CONTAINER} >
        <h4 className="lastHeading" > { title } </h4>
        <p className="paragraph" >
            { children }
        </p>
    </div>
}

TextContainer.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}