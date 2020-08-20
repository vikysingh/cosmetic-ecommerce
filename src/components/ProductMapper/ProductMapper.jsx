import React from 'react';

import globalStyles from "../../styles/globalStyle.module.css"
import styles from "./ProductMapper.module.css"

import { ProductCard } from "../index"
import useFetch from "../../contexts/useFetchProducts"

import API from "../../constant/API.json"

function ProductMapper({ headContent }) {
    const { data } = useFetch(API.baseUrl + "?brand=maybelline")

    return ( 
        <section id={styles.PRODUCT_MAPPER} >
            <div id={styles.PRODUCT_MAPPER__HEAD}>
                { headContent }
            </div>
            <div id={styles.PRODUCT_MAPPER__BODY} className={globalStyles.flexRowAroundCenter}>
                {
                    !data ? <h3> Loading </h3> : 
                    data.map(item => <ProductCard key={item.id} id={item.id} title={item.name} 
                    description={"€" + item.price} imgUrl={item.api_featured_image} />)
                }
            </div>
        </section>
    )
}


export default ProductMapper;
