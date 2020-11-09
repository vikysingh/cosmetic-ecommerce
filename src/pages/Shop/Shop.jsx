import React from "react"
import { Row, Col } from "antd"

import { Filterbar, ProductMapper, FilterDisplayer, ProductCard, Messages } from "../../components"

import useFetchProducts from "../../contexts/useFetchProducts"

import { connect } from "react-redux"

import PropTypes from "prop-types"

const urls = {
    base: 'https://makeup-api.herokuapp.com/api/v1/products.json',
}

function Shop({ product, brand, minPrice, maxPrice }) {

    const { loading, data, fetchProducts } = useFetchProducts()

    function formatUrl() {

        let urlConfig = ''
        
        if(brand !== '') {
            urlConfig = urls.base + `?product_type=${product}&brand=${brand}&price_greater_than=${minPrice}&price_less_than=${maxPrice}`
        }
        else {
            urlConfig = urls.base + `?product_type=${product}&brand=maybelline&price_greater_than=${minPrice}&price_less_than=${maxPrice}`
        }

        return urlConfig
    }

    React.useEffect(() => {
        fetchProducts(formatUrl())

        return () => null
    }, [ product, brand, minPrice, maxPrice ])

    

    return <Row>
        <Col lg={5} xs={24} md={5}>
            <Filterbar/>
        </Col>
        <Col lg={19} xs={24} md={19}>
            <FilterDisplayer />
            {
                !data ? loading && <Messages type="loading" /> :
                <ProductMapper 
                productsList={data} 
                cardType={(imgUrl, name, id) => <ProductCard imgUrl={imgUrl} 
                    name={name} id={id} key={id} />}
                direction="row"
                 />
            }
        </Col>
    </Row>
}

Shop.propTypes = {
    product: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    minPrice: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    maxPrice: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
}

const mapStateToProps = state => ({ product: state.filters.product, 
    brand: state.filters.brand, minPrice: state.filters.minPrice, maxPrice: state.filters.maxPrice })

export default React.memo(connect(mapStateToProps)(Shop))