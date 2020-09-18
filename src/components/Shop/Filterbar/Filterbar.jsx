import React, { useRef } from "react"

import { FilterOutlined, CloseOutlined } from "@ant-design/icons"

import styles from "./Filterbar.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import Filter from "../Filter/Filter"
import PriceFilter from "../PriceFilter/PriceFilter"

import ProductStatics from "../../../constants/ProductStatics.json"


export default function Filterbar() {
    const iconRef = useRef(null)
    const filterBarRef = useRef(null)

    // function handleVue() {
    //     if(filterBarRef && iconRef) {
    //         if(filterBarRef.current.style.height === '100%') {
    //             filterBarRef.current.style.height = '40px'
    //             filterBarRef.current.style.backgroundColor = '#fff'
    //             iconRef.current.classList.remove(styles.FILTER_BAR__open_icon_active)
    //         } else {
    //             filterBarRef.current.style.height = '100%'
    //             filterBarRef.current.style.backgroundColor = '#eee'
    //             iconRef.current.classList.add(styles.FILTER_BAR__open_icon_active)
    //         }
    //     }
    // }

    function openFilters() {
        filterBarRef.current.style.display = "block"
    }

    function closeFilters() {
        filterBarRef.current.style.display = "none"
    }


    return <div className={styles.FILTER_BAR}  >

        <div id={styles.FILTER_BAR__head} className={globalStyles.flexRowEndCenter}>
            <label> Refine search </label>
            <FilterOutlined id={styles.FILTER_BAR__open_icon} ref={iconRef} 
            onClick={openFilters}/>
        </div>

        <div className={styles.FILTER_BAR__body} ref={filterBarRef}>
            <CloseOutlined id={styles.FILTER_BAR__close_icon}
            onClick={closeFilters} />
            <Filter title="Products" filterList={ProductStatics.productType} />
            <Filter title="Brands" filterList={ProductStatics.brands} />
            <PriceFilter />
        </div>

    </div>
}