import React from 'react';

import globalStyles from "../../../styles/globalStyle.module.css"
import styles from "./ProductMapper.module.css"

import { ProductCard } from "../../index"

import Message from "../../Utility/Messages/Message"
import FetchProducts from "../../../contexts/FetchProduct"

function ProductMapper({ urlMap }) {

    let data = null

    React.useEffect(() => {
        console.log("data1: ", data)
        FetchProducts(urlMap).then(res => { data = res })
    })
    
    return ( 
        <section id={styles.PRODUCT_MAPPER} >
            {
                data !== null ? 
                console.log("data: ", data) : <Message type="loading" /> 
            }
            
        </section>
    )
}


export default ProductMapper;
