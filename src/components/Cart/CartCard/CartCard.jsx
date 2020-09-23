import React from "react"

import { Typography } from "antd"
import { Link } from "react-router-dom"

import styles from "./CardCard.module.css"
import globalStyles from "../../../styles/Globals.module.css"

const { Title } = Typography

function CartCard({ imgUrl, name, price, id, dispatch }) {

    return <div id={styles.CART_CARD} className={globalStyles.flexRowStartCenter} >
        <img src={imgUrl} alt="" />
        <div>
            <Title level={4}>
                <Link to={`product/${id}`} > {name} </Link>
            </Title> 
            
            <h5> Total: €{price} </h5>
        </div>
    </div>
}

export default React.memo(CartCard)