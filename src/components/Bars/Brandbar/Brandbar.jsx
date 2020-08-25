import React from "react"
import { Link } from "react-router-dom"

import filters from "../../../constant/filters.json"

import globalStyles from "../../../styles/globalStyle.module.css"
import styles from "./Brandbar.module.css"

function Brandbar() {

    return (
        <div className={globalStyles.flexAllCenter} id={styles.BRANDBAR} > 
            <Link to="/shop" > {filters.brand[9]} </Link>
            <Link to="/shop" > {filters.brand[5]} </Link>
            <Link to="/shop" > {filters.brand[2]} </Link>
            <Link to="/shop" > {filters.brand[11]} </Link>
        </div>
    )
}

export default Brandbar