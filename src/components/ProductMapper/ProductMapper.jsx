import React from 'react';
import styles from "./ProductMapper.module.css"

import { ProductCard } from "../index"

function ProductMapper({ headContent }) {
    const ar = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
    return (
        <section className={styles.PRODUCT_MAPPER} >
            <div className={styles.PRODUCT_MAPPER__HEAD}>
                { headContent }
            </div>
            <div className={styles.PRODUCT_MAPPER__BODY} >
                {
                    ar.map(each => <ProductCard key={each} title="Title" description="Description" />)
                }
            </div>
        </section>
    )
}

export default ProductMapper;
