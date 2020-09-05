import React from "react"
import { Typography } from "antd"

import { ShopButton } from "../../index"
import CartSummaryLabel from "./CartSummaryLabel"
import styles from "./CartSummary.module.css"

const { Title } = Typography

function CartSummary() {
    return (
        <section id={styles.CART_SUMMARY} >
            <Title level={4} > Order Summary </Title>

                <CartSummaryLabel name="Subtotal" value="€100.00" />
                <CartSummaryLabel name="Shipping" value="€5.00" />
                <CartSummaryLabel name="Total" value="€100.00" />

            <ShopButton link="/checkout" > Go to checkout </ShopButton>
        </section>
    )
}

export default CartSummary