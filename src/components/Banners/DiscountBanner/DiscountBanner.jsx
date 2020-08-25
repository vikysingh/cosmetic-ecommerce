import React from 'react'
import { Typography } from "antd"

import { ShopButton } from "../../index"

import styles from "./DiscountBanner.module.css"
import globalStyles from "../../../styles/globalStyle.module.css"

import bronzer from "../../../assets/images/bronzer_banner.jpg"

const { Title, Text } = Typography

export default function Discountbanner() {
    return (
        <div id={styles.DISCOUNT_BANNER} style={{backgroundImage: `url(${bronzer})`}} >
            <div id={styles.DISCOUNT_BANNER__cover}></div>
            <div>
                <Text> Some random text </Text>
                <Title level={1}> Some random text placed here </Title>
                <ShopButton link="/shop"> Shop </ShopButton>
            </div>
            <div className={globalStyles.flexAllCenter} >
                <img src={bronzer} alt="bronzer" />
            </div>
        </div>
    )
}
