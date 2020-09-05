import React from 'react';

import RightColText from './RightColText';
import RightColQuantity from "./RightColQuantity"
import PaymentIcons from './PaymentIcons';

import { ShopButton } from "../../index"

import styles from "./RightCol.module.css"

function RightCol({ name, type, price, description }) {
    
    return (
        <div id={styles.RIGHT_COL} >

            <div id={styles.RIGHT_COL__upper}>
                <RightColText name={name} type={type} price={price} description={description} />
                <RightColQuantity />
                <ShopButton link="/cart" > Add to cart </ShopButton>
            </div>

            <div id={styles.RIGHT_COL__lower}>
                <PaymentIcons />
            </div>

        </div>
    )
}

export default RightCol;
