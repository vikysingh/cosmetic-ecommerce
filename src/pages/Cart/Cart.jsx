import React from "react"

import { Row, Col } from "antd"

import { MapCartItems, CartBoard, Messages } from "../../components"

import styles from "./Cart.module.css"
// import { getSubtotal } from "../../redux/actions/cart/cartActionGenerators"

import { connect } from "react-redux"

import PropTypes from "prop-types"

function Cart({ cartProducts, dispatch }) {

    const [ subTotalPrice, setSubtotalPrice ] = React.useState(0)

    const shippingPrice = 0
    
    React.useEffect(() => {
        setSubtotal()
    }, [ cartProducts ])

    function setSubtotal() {
        if(cartProducts.length !== 0) {
            let sbtotal = 0.00

            cartProducts.map(eachPrice => sbtotal = sbtotal + parseFloat(eachPrice.price))

            setSubtotalPrice(sbtotal.toFixed(2))
        }
    }
    
    return <Row className={styles.CART} >
        {
            cartProducts.length === 0 ? 
            <Col span={24}> 
                <Messages type="emptyCart" />
            </Col>: 
            <>
            <Col lg={14} md={14} xs={24}>
                <MapCartItems onRead={false} productList={cartProducts} dispatch={dispatch}/> 
            </Col>
            <Col lg={10} md={10} xs={24}>
                <CartBoard subtotal={parseFloat(subTotalPrice)} 
                shippingPrice={shippingPrice}
                total={parseFloat(subTotalPrice + shippingPrice)} />
            </Col>
            </>
        }
    </Row>
}

Cart.propTypes = {
    cartProducts: PropTypes.array.isRequired
}

const mapStateToProps = state => state

export default React.memo(connect(mapStateToProps)(Cart))