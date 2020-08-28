import React, { useState } from 'react';

import globalStyles from "../../../styles/globalStyle.module.css"
import styles from "./ProductMapper.module.css"

import { ProductCard } from "../../index"
//import useFetch from "../../../contexts/useFetchProducts"
import getProducts from "../../../contexts/FetchProduct"

//import API from "../../../constant/API.json"

import Message from "../../Utility/Messages/Message"

function ProductMapper({ headContent, customSize }) {
    const [ data, setData ] = useState(null)

    React.useEffect(() => {
        getProducts().then(res => setData(res))
    }, [])
    

    return ( 
        <section id={styles.PRODUCT_MAPPER} >
            <div id={styles.PRODUCT_MAPPER__HEAD}>
                { headContent }
            </div>
            {
                data !== null ? 
                <div id={styles.PRODUCT_MAPPER__BODY} className={globalStyles.flexRowAroundCenter}>
                    {
                        data.map(item => <ProductCard key={item.id} id={item.id} title={item.name} 
                        description={"€" + item.price} imgUrl={item.api_featured_image} />)
                    }
                </div> : <Message type="loading" /> 
            }
            
        </section>
    )
}


export default ProductMapper;
