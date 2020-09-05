import React from 'react';
import PropTypes from "prop-types"

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

BannerCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
}

export default BannerCard;
