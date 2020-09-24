import React from "react"

import { ThemeButton }  from "../../components"

import { connect } from "react-redux"
import { addToCart } from "../../redux/actions/cart/cartActionGenerators"

function AddToCartBtn({dispatch, id, price}) {
    return <ThemeButton {...{ dispatch: () => dispatch(addToCart(id, parseFloat(price))) }} theme="shop_reverse">Add To CART </ThemeButton>
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(AddToCartBtn)