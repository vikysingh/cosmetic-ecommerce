import React from "react"
import { Link } from "react-router-dom"

import styles from "./ProductCard.module.css"

import globalStyles from "../../../styles/Globals.module.css"

import { Typography } from "antd"

const { Title } = Typography


function ProductCard({ imgUrl, name, id }) {
    
    return (
        <Link to={`/product/${id}`} id={styles.PRODUCT_CARD}  className={globalStyles.flexAllCenter} >
            <img src={imgUrl} alt="" />
            <Title level={4}> {name} </Title>
        </Link>
    )
}

export default React.memo(ProductCard)