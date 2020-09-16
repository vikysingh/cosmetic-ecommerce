import React from "react"

import styles from "./Filterbar.module.css"

import Filter from "../Filter/Filter"
import PriceFilter from "../PriceFilter/PriceFilter"

import ProductStatics from "../../../constants/ProductStatics.json"


export default function Filterbar() {
    return <div className={styles.FILTER_BAR} >
        <Filter title="Products" filterList={ProductStatics.productType} />
        <Filter title="Brands" filterList={ProductStatics.brands} />
        <PriceFilter />
    </div>
}