import React from 'react';

import globalStyles from "../../styles/globalStyle.module.css"
import cardStyles from "./ProductCard.module.css"

import { Typography, Button } from "antd"

const { Title, Paragraph } = Typography

function ProductCard({ title, description, imgUrl }) {
    return (
        <div id={cardStyles.PRODUCT_CARD}> 
            <div className={globalStyles.flexAllCenter} id={cardStyles.PRODUCT_CARD_cover}>
                <img src={imgUrl} alt="" />
            </div>
            <div id={cardStyles.PRODUCT_CARD_meta}>
                <Title level={4}> {title} </Title>
                <Paragraph> {description} </Paragraph>
                <Button type="primary" size="default" > Add to cart </Button>
                <Button type="dashed" size="default" > View More </Button>
            </div>
        </div>
    )
}



export default ProductCard;
