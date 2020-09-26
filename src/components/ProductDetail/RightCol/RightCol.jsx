import React from 'react';

import RightColText from './Childs/RightColText';

import { connect } from "react-redux"

import { addToCart } from "../../../redux/actions/cart/cartActionGenerators"

import styles from "./RightCol.module.css"

function RightCol({ name, type, price, imgUrl, description, dispatch, id, cartProducts }) {

    let btnRef = React.useRef(null)

    React.useEffect(() => {
        disableButton()
    }, [ cartProducts ])

    function disableButton() {
        if(cartProducts.length !== 0) {
            cartProducts.map(each => {
                if(id === each.id) {
                    btnRef.current.disabled = true
                    btnRef.current.style.opacity = 0.5
                    btnRef.current.textContent = "Already added to cart"
                }
            }) 
        }
    }
    
    return (
        <div id={styles.RIGHT_COL} >

            <div id={styles.RIGHT_COL__upper}>
                <RightColText name={name} type={type} price={price} description={description} />
                
                <button 
                onClick={() => {
                    dispatch(addToCart(id, parseFloat(price), parseFloat(price), imgUrl, name, 1 ))
                }} ref={btnRef}  > Add to cart </button>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    cartProducts: state.cartProducts
})

export default connect(mapStateToProps)(RightCol)
