import React from 'react';

import styles from "./Shop.module.css"

function Shop({ leftCol, rightCol }) {
    
    return (
        <div className={styles.SHOP} >
                <div id={styles.SHOP__LEFT_COL}>
                    { leftCol }
                </div>
                <div id={styles.SHOP__RIGHT_COL}>
                    { rightCol }
                </div>
        </div>
    )
}

export default Shop;
