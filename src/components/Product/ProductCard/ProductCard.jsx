import React from 'react';
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import globalStyles from "../../../styles/globalStyle.module.css"
import cardStyles from "./ProductCard.module.css"

import { Typography } from "antd"

const { Title, Paragraph } = Typography

function ProductCard({ title, description, imgUrl, id }) {
    return (
        <Link to={`/product/${id}`} id={cardStyles.PRODUCT_CARD}> 
            <div className={globalStyles.flexAllCenter} id={cardStyles.PRODUCT_CARD_cover}>
                <img src={imgUrl} alt="" />
            </div>
            <div id={cardStyles.PRODUCT_CARD_meta}>
                <Title level={4}> {title} </Title>
                <Paragraph> {description} </Paragraph>
                {/* <Button type="primary" size="default" > Add to cart </Button>
                <Link to={`/product/${id}`} >
                    <Button size="default" > More info </Button>
                </Link> */}
            </div>
        </Link>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}


export default ProductCard;
