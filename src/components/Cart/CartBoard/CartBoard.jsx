import React from "react"

import styles from "./CartBoard.module.css"
 
import { ThemeButton } from "../../index"
import PropTypes from 'prop-types'

import routes from "../../../constants/routes.json"

function CartBoard({ subtotal, shippingPrice, total }) {

    return <div className={styles.CART_BOARD} >
        <h3 className="paragraph" > Order Summary </h3>
        <hr />
        <div className="flexRowBetweenCenter" >
            <h4 className="paragraph" > Subtotal </h4>
            <strong> €{subtotal} </strong> 
        </div>
        <div className="flexRowBetweenCenter" >
            <h4 className="paragraph" > Shipping </h4>
            <strong> €{shippingPrice} </strong> 
        </div>
        <hr />
        <div className="flexRowBetweenCenter" >
            <h4 className="paragraph" > Total </h4>
            <strong> €{total} </strong> 
        </div>
        <ThemeButton > Go to checkout</ThemeButton>
    </div>
}

CartBoard.propTypes = {
    subtotal: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}


export default React.memo(CartBoard)