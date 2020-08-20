import React from 'react';
import { Col, Row } from "antd"
import { useParams } from "react-router-dom"
import styles from "./ProductDetail.module.css"

import useFetch from "../../contexts/useFetchProducts"
import { LeftCol, RightCol, Navbar } from '../../components/';

function ProductDetail() {
    
    const { productId } = useParams()

    const { data } = useFetch(`https://makeup-api.herokuapp.com/api/v1/products/${productId}.json`)
    console.log(data)

    return (
        <div id={styles.PRODUCT_DETAIL} >
            <Navbar />
            {
                !data ? <h2>loading</h2> : 
                <Row id={styles.PRODUCT_DETAIL__upper_row} >
                    
                    <Col xl={12} lg={24} sm={24}>
                        <LeftCol imgList={[ data.image_link, data.api_featured_image ]} alt={data.name} />
                    </Col>

                    <Col xl={12} lg={24} sm={24} >
                        <RightCol name={data.name} type={data.product_type} 
                        price={data.price} description={data.description} />
                    </Col>
                </Row>
            }
            <section></section>
        </div>
    )
}

export default ProductDetail;
