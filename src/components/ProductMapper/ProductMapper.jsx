import React from 'react';

import globalStyles from "../../styles/globalStyle.module.css"
import styles from "./ProductMapper.module.css"

import { ProductCard } from "../index"
import useFetch from "../../contexts/useFetchProducts"

function ProductMapper({ headContent }) {
    const { data } = useFetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")

    return (
        <section id={styles.PRODUCT_MAPPER} >
            <div id={styles.PRODUCT_MAPPER__HEAD}>
                { headContent }
            </div>
            <div id={styles.PRODUCT_MAPPER__BODY} className={globalStyles.flexRowAroundCenter}>
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
