import React from "react"
import { Row, Col } from "antd"

import { useParams } from "react-router-dom"

import { ProductDetailLeftCol, ProductDetailRightCol, Messages } from "../../components"


export default function ProductDetail() {

    const [ productState, setProductState ] = React.useState({})

    const { productId } = useParams()

    React.useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        let response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${productId}.json`)
        let data = await response.json()

        setProductState(data)
    }

    return <>
            {
                productState.name === undefined ? <Messages type="loading" height="100vh" /> :
                <Row>
                    <Col lg={12} xs={24}>
                        <ProductDetailLeftCol imgList={[ productState.image_link, productState.api_featured_image ]}
                        alt=""
                        />
                    </Col>

                    <Col lg={12} xs={24}>
                        <ProductDetailRightCol name={productState.name} type={productState.product_type}
                        price={productState.price} description={productState.description} id={productState.id}
                         />
                    </Col>
                </Row>
            }
    </>
}