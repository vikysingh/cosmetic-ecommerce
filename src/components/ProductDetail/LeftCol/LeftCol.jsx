import React, { useState } from 'react';
import PropTypes from "prop-types"

import styles from "./LeftCol.module.css"
import globalStyles from "../../../styles/Globals.module.css"

function LeftCol({ imgList, alt }) {

    const [ currentImage, setCurrentImage ] = useState(0)
    
    return (
        <div id={styles.LEFT_COL}>
            <div id={styles.LEFT_COL__upper} className={globalStyles.flexAllCenter} >
                { imgList && <img src={imgList[currentImage]} alt={alt} /> }
            </div>
            <div id={styles.LEFT_COL__lower} className={globalStyles.flexRowAroundCenter} >
                 
                 {/*imgList && imgList.map(image => <img src={image} alt={alt} />)*/}
                 <img src={imgList[0]} alt={alt} onClick={() => setCurrentImage(0)} />
                 <img src={imgList[1]} alt={alt} onClick={() => setCurrentImage(1)} />
            </div>
        </div>
    )
}

LeftCol.propTypes = {
    imgList: PropTypes.array.isRequired,
    alt: PropTypes.string.isRequired
}

export default LeftCol;
