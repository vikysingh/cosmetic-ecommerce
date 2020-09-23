import React, { useEffect } from "react"

import { Typography } from "antd"

import { connect } from "react-redux"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./CartBoard.module.css"

import { ThemeButton } from "../../index"

const { Title } = Typography

function CartBoard({ cart }) {

    const [ cartTotal, setTotal ] = React.useState(0)
    const shippingPrice = 5.00

    useEffect(() => {
        mapSubtotalPrice()
    }, [ cart ])

    function mapSubtotalPrice() {
        if(cart.length !== 0) {
            cart.map(each => setTotal(cartTotal => cartTotal + each.price))
        }
    }

    return <div className={styles.CART_BOARD} >
        <Title level={3}> Order Summary </Title>
        <hr />
        <div className={globalStyles.flexRowBetweenCenter} >
            <Title level={4}> Subtotal </Title>
            <strong> €{cartTotal.toFixed(2)} </strong> 
        </div>
        <div className={globalStyles.flexRowBetweenCenter} >
            <Title level={4}> Shipping </Title>
            <strong> €{shippingPrice} </strong> 
        </div>
        <hr />
        <div className={globalStyles.flexRowBetweenCenter} >
            <Title level={4}> Total </Title>
            <strong> €{(cartTotal + shippingPrice).toFixed(2)} </strong> 
        </div>
        <ThemeButton theme="shop" > Go to checkout </ThemeButton>
    </div>
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(CartBoard)