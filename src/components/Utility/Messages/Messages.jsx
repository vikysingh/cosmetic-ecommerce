import React from "react"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./Messages.module.css"

function Messages({ type, height }) {
    return <div style={{ height }}
    className={globalStyles.flexAllCenter} id={styles.MESSAGES} >
        { type === 'error' && <h3 id={styles.MESSAGES__error} > Something went wrong... </h3> }
        { type === 'loading' && <h3 id={styles.MESSAGES__loading} > Loading... </h3> }
        { type === 'search0' && <h3 id={styles.MESSAGES__search0} > No products found </h3> }
        { type === 'emptyCart' && <h3 id={styles.MESSAGES__empty_cart} > Your cart is empty </h3> }
    </div>
}

export default React.memo(Messages)