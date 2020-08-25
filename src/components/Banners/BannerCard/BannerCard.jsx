import React from 'react';
import { Typography } from "antd"
 
import styles from "./BannerCard.module.css"

import { ShopButton } from "../../index"

import globalStyles from "../../../styles/globalStyle.module.css"

const { Title } = Typography

function BannerCard({ imgSrc, title, bgColor }) {
    return (
        <div id={styles.BANNER_CARD} style={{ background: bgColor }} >
            {/* <div  id={styles.BANNER_CARD__cover}></div> */}
            <div className={globalStyles.flexAllCenter} >
                <Title level={3} strong={true} > {title} </Title>
                <img src={imgSrc} alt="alt" />
            </div>
            <ShopButton link="/shop" > Shop Now </ShopButton>
        </div>
    )
}

export default BannerCard;
