import React from 'react';
import PropTypes from "prop-types"

import styles from "./LeftCol.module.css"

function LeftCol({ imgSrc, alt }) {
    
    return (
        <div className={`flexCenterCenter ${styles.LEFT_COL}`}>
            <img src={imgSrc} alt={alt} />
        </div>
    )
}

LeftCol.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default LeftCol;
