import React from 'react';

import RightColText from './Childs/RightColText';
import RightColQuantity from "./Childs/RightColQuantity"
// import PaymentIcons from './Childs/PaymentIcons';

//import { ShopButton } from "../../index"

import styles from "./RightCol.module.css"

function RightCol({ name, type, price, description }) {
    
    return (
        <div id={styles.RIGHT_COL} >

            <div id={styles.RIGHT_COL__upper}>
                <RightColText name={name} type={type} price={price} description={description} />
                <RightColQuantity />
                <button link="/cart" > Add to cart </button>
            </div>

            {/* <div id={styles.RIGHT_COL__lower}>
                <PaymentIcons />
            </div> */}

        </div>
    )
}

export default RightCol;
