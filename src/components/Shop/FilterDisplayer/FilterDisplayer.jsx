import React from "react"

import { connect } from "react-redux"

import styles from "./FilterDisplayer.module.css"

import FilterCard from "./FilterCard"

import { removeProduct, removeBrand, removeMinPrice, removeMaxPrice } from "../../../redux/actions/filters/filterActionGenerators"
import PropTypes from "prop-types"

function FilterDisplayer({ product, brand, minPrice, maxPrice, dispatch }) {
    return (
        <div className={`flexRowAroundCenter ${styles.FILTER_DISPLAYER} `} >
            {
                product === '' && brand === '' && minPrice === 0 && maxPrice === 100 ? 
                <h4 className="paragraph" > No filters applied </h4> :
                <>
                    { product !== '' && <FilterCard type="Product" name={product}
                    dispatch={dispatch} action={removeProduct} /> }

                    { brand !== '' && <FilterCard type="Brand" name={brand}
                    dispatch={dispatch} action={removeBrand} /> }
                    
                    { minPrice !== 0 && <FilterCard type="Min Price" name={'€'+minPrice}
                    dispatch={dispatch} action={removeMinPrice} /> }
                    
                    { maxPrice !== 100 && <FilterCard type="Max price" name={'€'+maxPrice}
                    dispatch={dispatch} action={removeMaxPrice} /> }
                </>
            }
        </div>
    )
}

FilterDisplayer.propTypes = {
    product: PropTypes.string,
    brand: PropTypes.string,
    minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

const mapStateToProps = state => state.filters

export default connect(mapStateToProps)(FilterDisplayer)