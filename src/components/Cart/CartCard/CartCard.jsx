import React from "react"

import { Link } from "react-router-dom"

import { DeleteOutlined } from "@ant-design/icons"

import styles from "./CartCard.module.css"

import { ProductQuantity } from "../../index"

import PropTypes from 'prop-types'

function CartCard({ imgUrl, name, price, id, dispatch, action, quantity, onRead }) {

    return <div className={`flexRowAroundCenter ${styles.CART_CARD} `} >
        <img src={imgUrl} alt="" />
        <div>
            <Link className="lastHeading .primaryColor" to={`/product/${id}`} > {name} </Link>     
            { onRead === false && <ProductQuantity id={id} quantity={quantity} /> }
            
            <h5 className="paragraph" > Total: €{price} </h5>
            { onRead === false && <DeleteOutlined className={styles.CART_CARD__delete_icon}
            onClick={() => dispatch(action.removeFromCart(id))}
             /> }
        </div>
    </div>
}

CartCard.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number,
    quantity: PropTypes.number
}

export default React.memo(CartCard)