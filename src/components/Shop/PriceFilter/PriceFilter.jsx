import React from "react"
import { Slider, Typography } from "antd"

import { connect } from "react-redux"
import filters from "../../../redux/actions/actionGenerators"

import globalStyles from "../../../styles/Globals.module.css"

import styles from "./PriceFilter.module.css"

const { Title } = Typography

function PriceFilter({dispatch}) {
      
    function onAfterChange(value) {
        dispatch(filters.setMinPrice(value[0]))
        dispatch(filters.setMaxPrice(value[1]))
    }

    return <div className={styles.PRICE_FILTER} >
        <Title level={3}> Price </Title>
        <div className={globalStyles.flexRowBetweenCenter} > 
            <Title level={4}> Min </Title>
            <Title level={4}> Max </Title>
        </div> 
        <Slider className={styles.PRICE_FILTER__slider}
        range
        step={10}
        defaultValue={[0, 100]}
        onAfterChange={onAfterChange}
        />
    </div>
}

const mapStateToProps = state => ({ dispatch: state.dispatch })

export default connect(mapStateToProps)(PriceFilter)