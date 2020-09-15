import React, { useState, useEffect } from "react"

import ProductCard from "../ProductCard/ProductCard"

import styles from "./ProductMapper.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import Messages from "../Messages/Messages"

export default function ProductMapper() {
    const [ products, setProducts ] = useState(null)

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        let response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=annabelle')
        let data = await response.json()

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