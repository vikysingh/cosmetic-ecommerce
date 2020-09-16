import React from "react"
import { Slider, Typography } from "antd"

import globalStyles from "../../../styles/Globals.module.css"

import styles from "./PriceFilter.module.css"

const { Title } = Typography

export default function PriceFilter() {
    function onChange(value) {
        console.log('onChange: ', value);
    }
      
    function onAfterChange(value) {
        console.log('onAfterChange: ', value);
    }

    return <div className={styles.PRICE_FILTER} >
        <Title level={3}> Price </Title>
        <div className={globalStyles.flexRowBetweenCenter} > 
            <Title level={4}> Min </Title>
            <Title level={4}> Max </Title>
        </div> 
        <Slider className={styles.PRICE_FILTER__slider}
        range
        step={10}
        defaultValue={[0, 100]}
        onChange={onChange}
        onAfterChange={onAfterChange}
        />
    </div>
}