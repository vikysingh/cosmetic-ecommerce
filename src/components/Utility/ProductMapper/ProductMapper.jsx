import React, { useState, useEffect } from "react"

import { connect } from "react-redux"

import ProductCard from "../ProductCard/ProductCard"

import styles from "./ProductMapper.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import Messages from "../Messages/Messages"

const urls = {
    base: 'https://makeup-api.herokuapp.com/api/v1/products.json'
}

function ProductMapper({ product, brand, minPrice, maxPrice }) {
    const [ products, setProducts ] = useState(null)

    console.log("PROPS FROM PRODUCT MAPPER: ", product)

    useEffect(() => {
        fetchProducts()
    }, [ product, brand, minPrice, maxPrice ])

    async function fetchProducts() {

        let response = []
        let data = []

        let urlConfig = ''

        //Fetch in base of no filters applied
        if(brand !== '') {
            urlConfig = urls.base + `?product_type=${product}&brand=${brand}&price_greater_than=${minPrice}&price_less_than=${maxPrice}`
        }
        else {
            urlConfig = urls.base + `?product_type=${product}&brand=maybelline&price_greater_than=${minPrice}&price_less_than=${maxPrice}`
        }

        response = await fetch(urlConfig)
        data = await response.json()

        setProducts(data)
    }

    return <div id={styles.PRODUCT_MAPPER} >
        {
            !products ? <Messages type='loading' /> :
            <div className={globalStyles.flexRowAroundCenter} >
                {
                    products.map(product => <ProductCard id={product.id}
                        key={product.id} imgUrl={product.image_link} />)
                }
            </div>
        }
    </div>
}

const mapStateToProps = state => ({ product: state.product, 
    brand: state.brand, minPrice: state.minPrice, maxPrice: state.maxPrice })

export default connect(mapStateToProps)(ProductMapper)