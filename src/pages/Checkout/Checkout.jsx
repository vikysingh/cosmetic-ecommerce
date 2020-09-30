import React from "react"

import { Row, Col } from "antd"

import {  MapCartItems } from "../../components"

import { connect } from "react-redux"
import styles from "./Checkout.module.css"

function Checkout({ cartProducts, leftCol, dispatch }) {
    return <Row className={styles.CHECKOUT} >
        <Col lg={15} md={15} xs={24}  className={styles.CHECKOUT__left_col}>
            { leftCol }
        </Col>
        <Col lg={9} md={9}  xs={24}> <MapCartItems dispatch={dispatch}
        productList={cartProducts} /> </Col>
    </Row>
}

const mapStateToProps = state => state

export default React.memo(connect(mapStateToProps)(Checkout))