import React from "react"

import { connect } from "react-redux"

import { setBrand, setProduct } from "../../../redux/actions/filters/filterActionGenerators"

import { Typography } from "antd"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./Filter.module.css"

import PropTypes from "prop-types"

const { Title } = Typography

function Filter({ title, filterList, /*brand, product,*/ type, dispatch }) {

    return <div className={styles.FILTER} >
        
        <Title level={3}> {title} </Title>
        <div className={globalStyles.flexRowAroundCenter} >
            {
                filterList.map(item => <label key={item}
                    onClick={() => {
                        if(type === 'products') dispatch(setProduct(item))
                        else if (type === 'brand') dispatch(setBrand(item))
                    }}>
                    { item } </label>)
            }
        </div>
    </div>
}

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    filterList: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
}

const mapStateToProps = state => state.filters

export default connect(mapStateToProps)(Filter)