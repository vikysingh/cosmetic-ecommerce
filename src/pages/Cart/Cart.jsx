import React from "react"

import { Row, Col } from "antd"

import { MapCartItems, CartBoard, Messages } from "../../components"

import styles from "./Cart.module.css"

import { connect } from "react-redux"

function Cart({ cart }) {
    
    return <Row className={styles.CART} >
        {
            cart.length === 0 ? 
            <Col span={24}> 
                <Messages type="emptyCart" />
            </Col>: 
            <>
            <Col lg={14} md={14} xs={24}>
                <MapCartItems />
            </Col>
            <Col lg={10} md={10} xs={24}>
                <CartBoard />
            </Col>
            </>
        }
    </Row>
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Cart)