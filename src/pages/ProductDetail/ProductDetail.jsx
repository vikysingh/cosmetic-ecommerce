import React from 'react';
import { Col, Row } from "antd"
import { useParams } from "react-router-dom"
import styles from "./ProductDetail.module.css"

import useFetch from "../../contexts/useFetchProducts"

function ProductDetail({ leftCol, rightCol }) {
    
    const { productId } = useParams()
    const { data } = useFetch(`https://makeup-api.herokuapp.com/api/v1/products/${productId}.json`)
    

    return (
        <div id={styles.PRODUCT_DETAIL} >
            {
                !data ? <h2>loading</h2> : 
                <Row id={styles.PRODUCT_DETAIL__upper_row} >
                    
                    <Col xl={12} lg={24} sm={24}>
                        { leftCol([ data.image_link, data.api_featured_image ], data.name) }
                    </Col>

                    <Col xl={12} lg={24} sm={24} >
                        { rightCol(data.name, data.product_type, data.price, data.description) }
                    </Col>
                </Row>
            }
        </div>
    )
}

export default ProductDetail;