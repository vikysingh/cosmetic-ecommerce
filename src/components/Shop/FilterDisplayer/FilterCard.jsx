import React from "react"
import { CloseCircleOutlined } from "@ant-design/icons"

import styles from "./FilterDisplayer.module.css"

import PropTypes from "prop-types"

export default function FilterCard({ type, name, dispatch, action }) {
    return <div className={styles.FILTER_DISPLAYER__filter_card} >
        <label>{type}: </label>
        <strong> { name } </strong>
        <CloseCircleOutlined className={styles.FILTER_DISPLAYER__close_icon}
        onClick={() => dispatch(action())} />
    </div>
}

FilterCard.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}