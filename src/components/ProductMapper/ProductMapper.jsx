import React from 'react';
import styles from "./ProductMapper.module.css"

import { ProductCard } from "../index"
import useFetch from "../../contexts/useFetchProducts"

function ProductMapper({ headContent }) {
    const { data } = useFetch()

    return (
        <section className={styles.PRODUCT_MAPPER} >
            <div className={styles.PRODUCT_MAPPER__HEAD}>
                { headContent }
            </div>
            <div className={styles.PRODUCT_MAPPER__BODY} >
                {
                    !data ? <h3> Loading </h3> : 
                    data.map(item => <ProductCard key={item.id} title={item.name} 
                    description={"€" + item.price} imgUrl={item.api_featured_image} />)
                }
            </div>
        </section>
    )
}


export default ProductMapper;
