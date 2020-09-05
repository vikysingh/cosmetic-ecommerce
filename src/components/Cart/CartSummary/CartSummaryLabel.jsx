import React from "react"

import globalStyles from "../../../styles/globalStyle.module.css"
import styles from "./CartSummary.module.css"


function CartSummaryLabel({ name, value }) {
    return (
        <div className={globalStyles.flexRowAroundCenter} id={styles.CART_SUMMARY_LABEL} >
            <label> { name } </label>
            <label> { value } </label>
        </div>
    )
}

export default CartSummaryLabel