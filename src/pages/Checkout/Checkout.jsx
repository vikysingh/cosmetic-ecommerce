import React from "react"

import { Row, Col } from "antd"

import {  MapCartItems } from "../../components"

import { Redirect } from "react-router-dom"

import { connect } from "react-redux"
import styles from "./Checkout.module.css"

import routes from "../../constants/routes.json"

function Checkout({ cartProducts, leftCol, dispatch }) {
    
    return (
        cartProducts.length >= 1 ? <Row className={styles.CHECKOUT} >
        <Col lg={15} md={15} xs={24}  className={styles.CHECKOUT__left_col}>
            { leftCol }
        </Col>
        <Col lg={9} md={9}  xs={24}> <MapCartItems onRead={true} dispatch={dispatch}
        productList={cartProducts} /> </Col>
    </Row> : <Redirect to={routes.cart} />
    )
}

const mapStateToProps = state => state

export default React.memo(connect(mapStateToProps)(Checkout))