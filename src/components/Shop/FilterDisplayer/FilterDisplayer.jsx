import React from "react"
import { Typography } from "antd"

import { connect } from "react-redux"

import styles from "./FilterDisplayer.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import FilterCard from "./FilterCard"

import filters from "../../../redux/actions/filters/filterActionGenerators"

const { Title } = Typography

function FilterDisplayer({ product, brand, minPrice, maxPrice, dispatch }) {
    return (
        <div className={globalStyles.flexRowAroundCenter} id={styles.FILTER_DISPLAYER} >
            {
                product === '' && brand === '' && minPrice === 0 && maxPrice === 100 ? 
                <Title level={4}> No filters applied </Title> :
                <>
                    { product !== '' && <FilterCard type="Product" name={product}
                    dispatch={dispatch} action={filters.removeProduct} /> }

                    { brand !== '' && <FilterCard type="Brand" name={brand}
                    dispatch={dispatch} action={filters.removeBrand} /> }
                    
                    { minPrice !== 0 && <FilterCard type="Min Price" name={'€'+minPrice}
                    dispatch={dispatch} action={filters.removeMinPrice} /> }
                    
                    { maxPrice !== 100 && <FilterCard type="Max price" name={'€'+maxPrice}
                    dispatch={dispatch} action={filters.removeMaxPrice} /> }
                </>
            }
        </div>
    )
}

const mapStateToProps = state => state.filters

export default connect(mapStateToProps)(FilterDisplayer)