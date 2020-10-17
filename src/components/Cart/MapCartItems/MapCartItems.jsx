import React from 'react'

import styles from "./MapCartItems.module.css"

import CartCard from "../CartCard/CartCard"

import { removeFromCart } from "../../../redux/actions/cart/cartActionGenerators"

import PropTypes from "prop-types"

function Mapcartitems({ productList, dispatch, onRead }) {
    
    return (
        <div className={`flexColAroundCenter ${styles.MAP_CART_ITEMS}`}>
            {
                productList === undefined && productList.length === 0 ? <h4>Loading</h4> :
                productList.map(cartItem => <CartCard onRead={onRead} imgUrl={cartItem.imgUrl} key={cartItem.id}
                name={cartItem.name} id={cartItem.id} quantity={cartItem.quantity}
                price={cartItem.price} dispatch={dispatch} action={{ removeFromCart }}
                 />)
            }
        </div>
    )
}
 
Mapcartitems.propTypes = {
    productsList: PropTypes.array,
    onRead: PropTypes.bool
}

export default React.memo(Mapcartitems)