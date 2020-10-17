import React from 'react'

import { useHistory } from "react-router-dom"

import { Hero, ProductBanner, ProductCard, ProductMapper, BigLabel, 
    Newsletter, Messages, ThemeButton } from "../../components"
import styles from "./Home.module.css"

import useFetchProducts from "../../contexts/useFetchProducts"

import routes from "../../constants/routes.json"

export default function Home() {

    const { loading, data, fetchProducts } = useFetchProducts()

    React.useEffect(() => {
        fetchProducts('https://makeup-api.herokuapp.com/api/v1/products.json?brand=fenty')   
    }, [])

    let history = useHistory()

    return (
        <div className={`setSection ${styles.HOME}`}>
            <Hero />
            <ProductBanner /> 
            <BigLabel text="New Arrivals" />
            {
                !data ? loading && <Messages type="loading" />:
                <ProductMapper
                productsList={data} 
                cardType={(imgUrl, name, id) => <ProductCard imgUrl={imgUrl} 
                    name={name} id={id} key={id} />}
                direction="row"
                 />
            }
            <div className="flexCenterCenter">
                <ThemeButton clickHandler={() => history.push(routes.shop)}  > SEE ALL PRODUCTS </ThemeButton>
            </div>
            <Newsletter />
        </div>
    )
}
 