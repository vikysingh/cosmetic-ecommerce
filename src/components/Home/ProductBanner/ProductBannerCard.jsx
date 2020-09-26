import React from 'react'
import { Link } from "react-router-dom"

import styles from "./ProductBanner.module.css"
import { Typography } from "antd"
import routes from "../../../constants/routes.json"

import { connect } from "react-redux"

import { setProduct } from "../../../redux/actions/filters/filterActionGenerators"


const { Title } = Typography

function Productbannercard({ imgSrc, text, dispatch, productType}) {
    return (
        <Link to={routes.shop} className={styles.PRODUCT_BANNER__card}
        onClick={() => dispatch(setProduct(productType)) }
         >
            <img src={imgSrc} alt="" />
            <Title level={3}> { text } </Title>
        </Link>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Productbannercard)