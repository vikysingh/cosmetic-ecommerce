import React, { useState } from 'react';
import PropTypes from "prop-types"

import styles from "./LeftCol.module.css"

function LeftCol({ imgList, alt }) {

    const [ currentImage, setCurrentImage ] = useState(0)
    
    return (
        <div className={styles.LEFT_COL}>
            <div className={`flexCenterCenter ${styles.LEFT_COL__upper}`} >
                { imgList && <img src={imgList[currentImage]} alt={alt} /> }
            </div>
            <div className={`flexRowAroundCenter ${styles.LEFT_COL__lower}`} >
                 
                 <img src={imgList[0]} alt={alt} onClick={() => setCurrentImage(0)} />
                 <img src={imgList[1]} alt={alt} onClick={() => setCurrentImage(1)} />
            </div>
        </div>
    )
}

LeftCol.propTypes = {
    imgList: PropTypes.array.isRequired,
    alt: PropTypes.string
}

export default LeftCol;
