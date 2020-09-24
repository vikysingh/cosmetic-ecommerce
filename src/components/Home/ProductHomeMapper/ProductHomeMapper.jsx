import React from "react"

import { ProductCard, Messages } from "../../index"

import styles from "./ProductHomeMapper.module.css"
import globalStyles from "../../../styles/Globals.module.css"

export default function ProductHomeMapper() {
    const [ products, setProducts] = React.useState(null)

    React.useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        let response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=essie`)
        let data = await response.json()

        setProducts(data)
    }

    return <div id={styles.PRODUCT_MAPPER} >
    {
        !products ? <Messages type='loading' /> :
        products.length >= 1 ? 
        <div className={globalStyles.flexRowAroundCenter} >
            {
                products.map(product => <ProductCard id={product.id}
                    key={product.id} imgUrl={product.api_featured_image} name={product.name} />)
            } 
        </div> : <Messages type="search0" />
    }
</div>
}