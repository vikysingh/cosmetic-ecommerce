import React from "react"

import { setBrand, setProduct } from "../../../redux/actions/filters/filterActionGenerators"

import styles from "./Filter.module.css"

import PropTypes from "prop-types"

import { connect } from "react-redux"

function Filter({ title, filterList, type, dispatch }) {

    return <div className={styles.FILTER} >
        
        <h2 className="lastHeading" > {title} </h2>
        <div className="flexRowAroundCenter" >
            {
                filterList.map(item => <h3 className="filterButton" key={item}
                    onClick={() => {
                        if(type === 'products') dispatch(setProduct(item))
                        else if (type === 'brand') dispatch(setBrand(item))
                    }}>
                    { item } </h3>)
            }
        </div>
    </div>
}

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    filterList: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
}

const mapStateToProps = state => state

export default React.memo(connect(mapStateToProps)(Filter))