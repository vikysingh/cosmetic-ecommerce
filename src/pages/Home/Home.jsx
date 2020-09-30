import React from 'react'

import { Hero, ProductBanner, ProductCard, ProductMapper, BigLabel, 
    Newsletter, DiscountBanner, Messages } from "../../components"
import styles from "./Home.module.css"

import useFetchProducts from "../../contexts/useFetchProducts"

export default function Home() {

    const { error, loading, data, fetchProducts } = useFetchProducts()

    React.useEffect(() => {
        fetchProducts('https://makeup-api.herokuapp.com/api/v1/products.json?brand=essie')   
    }, [])

    return (
        <div id={styles.HOME}>
            <Hero />
            <ProductBanner /> 
            <BigLabel text="Latest products" />
            {
                !data ? loading && <Messages type="loading" />:
                <ProductMapper
                productsList={data} 
                cardType={(imgUrl, name, id) => <ProductCard imgUrl={imgUrl} 
                    name={name} id={id} key={id} />}
                direction="row"
                 />
            }
            <DiscountBanner />
            <Newsletter />
        </div>
    )
}
 