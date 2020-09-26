import React from "react"

import { Typography } from "antd"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./CartBoard.module.css"
 
import { ThemeButton } from "../../index"

const { Title } = Typography

function CartBoard({ subtotal, shippingPrice, total }) {

    console.log("sbu from board: ", subtotal)

    return <div className={styles.CART_BOARD} >
        <Title level={3}> Order Summary </Title>
        <hr />
        <div className={globalStyles.flexRowBetweenCenter} >
            <Title level={4}> Subtotal </Title>
            <strong> €{subtotal} </strong> 
        </div>
        <div className={globalStyles.flexRowBetweenCenter} >
            <Title level={4}> Shipping </Title>
            <strong> €{shippingPrice} </strong> 
        </div>
        <hr />
        <div className={globalStyles.flexRowBetweenCenter} >
            <Title level={4}> Total </Title>
            <strong> €{total} </strong> 
        </div>
        <ThemeButton theme="shop" > Go to checkout </ThemeButton>
    </div>
}


export default React.memo(CartBoard)