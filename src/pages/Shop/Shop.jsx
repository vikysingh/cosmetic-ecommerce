import React from 'react';

import styles from "./Shop.module.css" 
import { Grid } from "../../components"

function Shop({ leftCol, rightCol }) {
    
    return (
        <div className={styles.SHOP} >
            <Grid leftCol={leftCol} rightCol={rightCol} leftSpan={6} rightSpan={18} />
                {/* <div id={styles.SHOP__LEFT_COL}>
                    { leftCol }
                </div>
                <div id={styles.SHOP__RIGHT_COL}>
                    { rightCol }
                </div> */}
        </div>
    )
}

export default Shop;
