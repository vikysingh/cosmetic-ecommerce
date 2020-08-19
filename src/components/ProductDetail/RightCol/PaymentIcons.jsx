import React from 'react';
import PaymentIcon from "react-payment-icons-inline";

import globalStyles from "../../../styles/globalStyle.module.css"
import styles from "./RightCol.module.css"

function PaymentIcons() {
    return (
        <>
            <h5> Guaranteed safe checkout </h5>
            <div className={globalStyles.flexRowAroundCenter} id={styles.RIGHT_COL__payment_icons__container} >
                <PaymentIcon icon="visa" />
                <PaymentIcon icon="paypal" />
                <PaymentIcon icon="applepay" />
                <PaymentIcon icon="googlepay" />
            </div>
        </>
    )
}

export default PaymentIcons;
