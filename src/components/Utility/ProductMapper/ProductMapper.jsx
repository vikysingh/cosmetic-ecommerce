import React from "react"

import styles from "./ProductMapper.module.css"

import Messages from "../Messages/Messages"

import PropTypes from "prop-types"

function ProductMapper({ productsList, cardType, direction }) {

    return <div id={styles.PRODUCT_MAPPER} >
        <div className="flexRowAroundCenter" style={{ flexDirection: direction }} >
        {
            productsList.length > 1 ? productsList.map(product => cardType(product.api_featured_image, product.name, product.id))
            : <Messages type="search0" />
        }
        </div>
    </div>
}

ProductMapper.propTypes = {
    productsList: PropTypes.array.isRequired,
    // cardType: PropTypes.node.isRequired,
    direction: PropTypes.string
}

export default React.memo(ProductMapper)