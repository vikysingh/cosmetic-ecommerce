import React from "react"
import { CloseCircleOutlined } from "@ant-design/icons"

import styles from "./FilterDisplayer.module.css"

export default function FilterCard({ type, name }) {
    return <div className={styles.FILTER_DISPLAYER__filter_card} >
        <label>{type}: </label>
        <strong> { name } </strong>
        <CloseCircleOutlined id={styles.FILTER_DISPLAYER__close_icon} />
    </div>
}