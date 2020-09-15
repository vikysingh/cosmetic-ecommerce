import React from "react"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./Messages.module.css"

export default function Messages({ type, height }) {
    return <div style={{ height }}
    className={globalStyles.flexAllCenter} id={styles.MESSAGES} >
        { type === 'error' && <h3 id={styles.MESSAGES__error} > Something went wrong... </h3> }
        { type === 'loading' && <h3 id={styles.MESSAGES__loading} > Loading... </h3> }
    </div>
}