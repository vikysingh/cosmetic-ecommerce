import React from "react"

import { Typography } from "antd"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./CartBoard.module.css"
 
import { ThemeButton } from "../../index"
import PropTypes from 'prop-types'

import { Link } from "react-router-dom"

import routes from "../../../constants/routes.json"

import { useHistory } from "react-router-dom"

import auth from "../../../utils/auth"

const { Title } = Typography

function CartBoard({ subtotal, shippingPrice, total }) {

    let history = useHistory()

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
        <button onClick={() => {
            auth.allowCheckout(() => {
                history.push(routes.checkoutAddress)
            })
        }} > 
            {/* <Link to={routes.checkoutAddress} > */}
                Go to checkout
            {/* </Link> */}
        </button>
    </div>
}

CartBoard.propTypes = {
    subtotal: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}


export default React.memo(CartBoard)