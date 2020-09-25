import React, { useState } from 'react'

import styles from "./MapCartItems.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import CartCard from "../CartCard/CartCard"

import { removeFromCart } from "../../../redux/actions/cart/cartActionGenerators"
import { connect } from "react-redux"

function Mapcartitems({ cart, dispatch }) {

    const [ items, setItems ] = useState([])

    React.useEffect(() => {
        mapData()
    }, [])
    
    function mapData() {

        cart.map(item => {
            fetch(`https://makeup-api.herokuapp.com/api/v1/products/${item.id}.json`)
            .then(response => response.json().then(data => {
                setItems(items => [...items, { imgUrl: data.api_featured_image, name: data.name, 
                    price: data.price, id: data.id }])
            }))
        })
    }
    return (
        <div id={styles.MAP_CART_ITEMS} className={globalStyles.flexColumnCenterCenter}>
            {
                items.length === 0 ? <h4>Loading</h4> :
                items.map(cartItem => <CartCard imgUrl={cartItem.imgUrl} key={cartItem.id}
                name={cartItem.name} quantity={cart[items.indexOf(cartItem)].quantity} 
                id={cartItem.id} price={cartItem.price} dispatch={dispatch} action={{ removeFromCart }}
                 />)
            }
        </div>
    )
}

const mapStateToProps = state => state

export default React.memo(connect(mapStateToProps)(Mapcartitems))