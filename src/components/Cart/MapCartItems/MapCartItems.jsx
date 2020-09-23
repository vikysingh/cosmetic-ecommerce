import React, { useState } from 'react'

import styles from "./MapCartItems.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import CartCard from "../CartCard/CartCard"

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
                items.map(cartiItem => <CartCard imgUrl={cartiItem.imgUrl}
                name={cartiItem.name} quantity={cart[items.indexOf(cartiItem)].quantity} 
                id={cartiItem.id} price={cartiItem.price} dispatch={dispatch} />)
            }
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Mapcartitems)