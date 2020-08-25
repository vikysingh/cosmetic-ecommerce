import React, { useState } from 'react';

import globalStyles from "../../styles/globalStyle.module.css"
import styles from "./ProductMapper.module.css"

import { ProductCard } from "../index"
import useFetch from "../../contexts/useFetchProducts"

import API from "../../constant/API.json"

import Message from "../Utility/Messages/Message"

function ProductMapper({ headContent, customSize }) {
    const { data, loading, error } = useFetch(API.baseUrl + "?brand=maybelline")
    const [ customData, setCustomData] = useState([])

    React.useEffect(() => {
        console.log(customSize)
        let custom = []
        if(data) {
            for(let i = 0; i <= customSize; i++) {
                custom.push(data[i])
            }
        }
        setCustomData(custom)
        console.log(custom)
    }, [data, customSize])
    

    return ( 
        <section id={styles.PRODUCT_MAPPER} >
            <div id={styles.PRODUCT_MAPPER__HEAD}>
                { headContent }
            </div>
            {
                !loading && !error && customData !== [] ? 
                <div id={styles.PRODUCT_MAPPER__BODY} className={globalStyles.flexRowAroundCenter}>
                    {
                        customData.map(item => <ProductCard key={item.id} id={item.id} title={item.name} 
                        description={"€" + item.price} imgUrl={item.api_featured_image} />)
                    }
                </div> :
                loading && !error ? <Message type="loading" /> : <Message type="error" />
            }
            
        </section>
    )
}


export default ProductMapper;
