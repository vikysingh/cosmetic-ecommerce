import React, { useRef } from "react"

import { FilterOutlined, CloseOutlined } from "@ant-design/icons"

import styles from "./Filterbar.module.css"

import Filter from "../Filter/Filter"
import PriceFilter from "../PriceFilter/PriceFilter"

import ProductStatics from "../../../constants/ProductStatics.json"


export default function Filterbar() {
    
    const filterBarRef = useRef(null)

    function openFilters() {
        filterBarRef.current.style.display = "block"
    }

    function closeFilters() {
        filterBarRef.current.style.display = "none"
    }


    return <div className={styles.FILTER_BAR}  >

        <div className={`flexRowEndCenter ${styles.FILTER_BAR__head}`}>
            <label> Refine search </label>
            <FilterOutlined className={styles.FILTER_BAR__open_icon}
            onClick={openFilters}/>
        </div>

        <div className={styles.FILTER_BAR__body} ref={filterBarRef}>
            <CloseOutlined className={styles.FILTER_BAR__close_icon}
            onClick={closeFilters} />
            <Filter title="Products" filterList={ProductStatics.productType} type="products"  />
            <Filter title="Brands" filterList={ProductStatics.brands} type="brand"   />
            <PriceFilter />
        </div>

    </div>
}