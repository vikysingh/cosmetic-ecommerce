import React from 'react';
import { useParams } from "react-router-dom"
import styles from "./ProductDetail.module.css"

import useFetch from "../../contexts/useFetchProducts"

import { Grid } from "../../components"

function ProductDetail({ leftCol, rightCol }) {
    
    const { productId } = useParams()
    const { data } = useFetch(`https://makeup-api.herokuapp.com/api/v1/products/${productId}.json`)

    return (
        <div id={styles.PRODUCT_DETAIL} >
            {
                !data ? <h2>loading</h2> : 
                <Grid leftCol={leftCol([ data.image_link, data.api_featured_image ], data.name)}

                rightCol={rightCol(data.name, data.product_type, data.price, data.description)}

                leftSpan={12}  rightSpan={12} />
            }
        </div>
    )
}

export default ProductDetail;