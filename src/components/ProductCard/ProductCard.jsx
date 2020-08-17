import React from 'react';
import { Card } from "antd";
import styles from "./ProductCard.module.css"

const { Meta } = Card

function ProductCard({ title, description }) {
    return (
        <Card className={styles.PRODUCT_CARD}
        cover={
                <div className={styles.PRODUCT_CARD_cover_div} >
                <h4>ciao</h4>
                <img 
                src="https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png" alt="" />
                </div>
                }
        > 
            <Meta className={styles.PRODUCT_CARD_meta} 
            title={title} description={description} />
        </Card>
    )
}



export default ProductCard;
