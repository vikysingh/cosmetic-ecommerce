import React from "react"
import { Typography } from "antd"

import { connect } from "react-redux"

import styles from "./FilterDisplayer.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import FilterCard from "./FilterCard"

const { Title } = Typography

function FilterDisplayer({ product, brand, minPrice, maxPrice }) {
    return (
        <div className={globalStyles.flexRowAroundCenter} id={styles.FILTER_DISPLAYER} >
            <Title level={4}> Filters:  </Title>
            {
                product === '' && brand === '' && minPrice === 0 && maxPrice === 100 ? 
                <center> No filters applied </center> :
                <>
                    { product !== '' && <FilterCard type="Product" name={product} /> }
                    { brand !== '' && <FilterCard type="Brand" name={brand} /> }
                    { minPrice !== 0 && <FilterCard type="Min Price" name={'€'+minPrice} /> }
                    { maxPrice !== 100 && <FilterCard type="Max price" name={'€'+maxPrice} /> }
                </>
            }
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(FilterDisplayer)