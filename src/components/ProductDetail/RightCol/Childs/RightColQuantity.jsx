import React, { useState } from 'react';

import { Slider, InputNumber, Typography } from "antd"

import globalStyles from "../../../../styles/Globals.module.css"
import styles from "../RightCol.module.css"

const { Paragraph } = Typography

function RightColQuantity() {
    const [ inputValue, setInputValue ] = useState(1)

    return (
        <>
            <Paragraph > <strong>Quantity</strong> </Paragraph>

            <div className={globalStyles.flexRowAroundCenter} id={styles.RIGHT_COL__quantity_container} >
                <Slider className={styles.PRODUCT_DETAIL__quantity_slider}
                    min={1}
                    max={10}
                    onChange={e => setInputValue(e)}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />

                <InputNumber
                    min={1}
                    max={10}
                    value={inputValue}
                    onChange={e => setInputValue(e)}
                    className={styles.PRODUCT_DETAIL__quantity_input}
                />
            </div>
        </>
    )
}

export default RightColQuantity;
