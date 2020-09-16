import React from 'react'

import ProductStatics from "../../../constants/ProductStatics.json"

import GlobalStyle from "../../../styles/Globals.module.css"
import styles from "./ProductBar.module.css"

export default function Productbar() {
    return (
        <div className={GlobalStyle.flexRowAroundCenter} id={styles.PRODUCT_BAR} >
            {
                ProductStatics.productType.map(product => <button 
                    key={product.value + "productbar"}> { product.name } </button>)
            }
        </div>
    )
}
