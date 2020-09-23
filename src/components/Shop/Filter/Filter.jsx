import React from "react"

import { connect } from "react-redux"

import filters from "../../../redux/actions/filters/filterActionGenerators"

import { Typography } from "antd"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./Filter.module.css"

const { Title } = Typography

function Filter({ title, filterList, /*brand, product,*/ type, dispatch }) {

    return <div className={styles.FILTER} >

        

        <Title level={3}> {title} </Title>
        <div className={globalStyles.flexRowAroundCenter} >
            {
                filterList.map(item => <label key={item}
                    onClick={() => {
                        if(type === 'products') dispatch(filters.setProduct(item))
                        else if (type === 'brand') dispatch(filters.setBrand(item))
                    }}>
                    { item } </label>)
            }
        </div>
    </div>
}

const mapStateToProps = state => state.filters

export default connect(mapStateToProps)(Filter)