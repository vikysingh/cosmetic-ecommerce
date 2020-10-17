import React from 'react';

import PropTypes from "prop-types"

import styles from "../RightCol.module.css"

function RightColText({ name, type, price, description }) {
    return (
        <>
            <h2 className="titleHeading" > {name} </h2>
            <h4> {type} </h4>
            <h3 className="lastHeading" > €{price} </h3>
            <p className={` paragraph ${styles.RIGHT_COL__product_description}`}> {description} </p>
        </>
    )
}

RightColText.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    price: PropTypes.string.isRequired,
    description: PropTypes.string
}


export default RightColText;
