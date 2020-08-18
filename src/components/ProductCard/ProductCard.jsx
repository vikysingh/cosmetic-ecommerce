import React from 'react';
import styles from "./ProductCard.module.css"

import { Typography, Button } from "antd"

const { Title, Paragraph } = Typography

function ProductCard({ title, description, imgUrl }) {
    return (
        <div className={styles.PRODUCT_CARD}> 
            <div className={styles.PRODUCT_CARD_cover}>
                <img src={imgUrl} alt="" />
            </div>
            <div className={styles.PRODUCT_CARD_meta}>
                <Title level={4}> {title} </Title>
                <Paragraph> {description} </Paragraph>
                <Button type="primary" size="default" > Add to cart </Button>
                <Button type="dashed" size="default" > Add to cart </Button>
            </div>
        </div>
    )
}
//https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png



export default ProductCard;
