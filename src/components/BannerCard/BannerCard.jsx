import React from 'react';
import { Typography } from "antd"

import styles from "./BannerCard.module.css"

import { ShopButton } from "../index"

const { Title } = Typography

function BannerCard({ imgSrc, title }) {
    return (
        <div className={styles.BANNER_CARD} style={{ backgroundImage: ` url(${imgSrc}) ` }} >
            <Title level={3} strong={true} > {title} </Title>
            <ShopButton link="/shop" > Shop Now </ShopButton>
        </div>
    )
}

export default BannerCard;
