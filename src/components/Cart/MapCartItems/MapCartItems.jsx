import React from 'react'

import styles from "./MapCartItems.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import CartCard from "../CartCard/CartCard"

import { removeFromCart } from "../../../redux/actions/cart/cartActionGenerators"

function Mapcartitems({ productList, dispatch }) {
 
    React.useEffect(() => {
        console.log("CART from cart: ", productList);
    }, [productList])
    
    return (
        <div id={styles.MAP_CART_ITEMS} className={globalStyles.flexColumnCenterCenter}>
            {
                productList === undefined && productList.length === 0 ? <h4>Loading</h4> :
                productList.map(cartItem => <CartCard imgUrl={cartItem.imgUrl} key={cartItem.id}
                name={cartItem.name} id={cartItem.id} quantity={cartItem.quantity}
                price={cartItem.price} dispatch={dispatch} action={{ removeFromCart }}
                 />)
            }
        </div>
    )
}

export default React.memo(Mapcartitems)