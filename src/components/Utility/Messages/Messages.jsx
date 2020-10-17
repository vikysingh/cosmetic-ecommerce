import React from "react"

import styles from "./Messages.module.css"

import PropTypes from "prop-types"

function Messages({ type, height }) {
    return <div style={{ height }}
    className={`flexCenterCenter ${styles.MESSAGES} `} >
        { type === 'error' && <h3 className={`${styles.MESSAGES__error} lastHeading warningError `} > Something went wrong... </h3> }
        { type === 'loading' && <h3 className={`${styles.MESSAGES__loading} lastHeading `} > Loading... </h3> }
        { type === 'search0' && <h3 className={`${styles.MESSAGES__search0} lastHeading `} > No products found </h3> }
        { type === 'emptyCart' && <h3 className={`${styles.MESSAGES__empty_cart} lastHeading `} > Your cart is empty </h3> }
    </div>
}

Messages.propTypes = {
    type: PropTypes.string.isRequired,
    height: PropTypes.string
}

export default React.memo(Messages)