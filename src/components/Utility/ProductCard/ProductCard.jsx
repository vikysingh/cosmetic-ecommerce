import React from "react"
import styles from "./ProductCard.module.css"

import globalStyles from "../../../styles/Globals.module.css"

export default function ProductCard({ imgUrl }) {
    
    return (
        <div id={styles.PRODUCT_CARD} className={globalStyles.flexAllCenter} >
            <img src={imgUrl} alt="" />
        </div>
    )
}