import React from "react"
import { Link } from "react-router-dom"

import styles from "./ProductCard.module.css"

import globalStyles from "../../../styles/Globals.module.css"

export default function ProductCard({ imgUrl, id }) {
    
    return (
        <Link to={`/product/${id}`} id={styles.PRODUCT_CARD} className={globalStyles.flexAllCenter} >
            <img src={imgUrl} alt="" />
        </Link>
    )
} 