import React from 'react';

import globalStyles from "../../../styles/globalStyle.module.css"
import styles from "./ProductMapper.module.css"

import { ProductCard } from "../../index"

function ProductMapper({ urlMap }) {
    
    return ( 
        <section id={styles.PRODUCT_MAPPER} className={globalStyles.flexRowAroundCenter} >
            {
                urlMap.map(product => <ProductCard title={product.name}
                    imgUrl={product.image_link} id={product.id} key={product.id}
                     />)
            }
        </section>
    )
}


export default ProductMapper;
