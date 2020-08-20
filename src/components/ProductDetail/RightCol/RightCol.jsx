import React from 'react';
import { Button } from "antd"


import RightColText from './RightColText';
import RightColQuantity from "./RightColQuantity"
import PaymentIcons from './PaymentIcons';

import styles from "./RightCol.module.css"

function RightCol({ name, type, price, description }) {
    
    return (
        <div id={styles.RIGHT_COL} >

            <div id={styles.RIGHT_COL__upper}>
                <RightColText name={name} type={type} price={price} description={description} />
                <RightColQuantity />
                <Button> Add to cart </Button>
            </div>

            <div id={styles.RIGHT_COL__lower}>
                <PaymentIcons />
            </div>

        </div>
    )
}

export default RightCol;
