import React from "react"

import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

import styles from "./ProductQuantity.module.css"

import { connect } from "react-redux"

import { increaseQuantity, decreaseQuantity } from "../../../redux/actions/cart/cartActionGenerators"

import PropTypes from "prop-types"

function ProductQuantity({ cartProducts, id, dispatch, quantity }) {

    console.log("log from quantity: ", cartProducts)

    return <div className={`flexRowStartCenter ${styles.PRODUCT_QUANTITY} `} >
        <PlusOutlined className={styles.PRODUCT_QUANTITY__btn}
        onClick={() => {
            dispatch(increaseQuantity(id))
        }}
         />
            <label > { quantity } </label>
            
        <MinusOutlined className={styles.PRODUCT_QUANTITY__btn} 
        onClick={() => {
            dispatch(decreaseQuantity(id))
        }}/>
    </div>
}

ProductQuantity.propTypes = {
    cartProducts: PropTypes.array,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
}

const mapStateToProps = state => ({cartProducts: state.cartProducts})

export default React.memo(connect(mapStateToProps)(ProductQuantity))