import React from "react"
import { Typography} from "antd"
import { DeleteFilled } from "@ant-design/icons"

import PropTypes from "prop-types"

import globalStyles from "../../../styles/globalStyle.module.css"
import styles from "./CartProduct.module.css"

import { ProductQuantity } from "../../index"

const { Title } = Typography 

function CartProduct({ imgSrc, name, quantity, price }) {
    return <div className={globalStyles.flexAllCenter} id={styles.CART_PRODUCT} >
        
        <img src={imgSrc}  alt="" />
        <div className={globalStyles.flexColumnStartStart}>
            
            <Title level={4}> { name } - { price } </Title>

            <div className={globalStyles.flexRowAroundCenter} id={styles.CART_PRODUCT__quantity_container} >
                <ProductQuantity />
                <DeleteFilled id={styles.CART_PRODUCT__delete_icon} />
            </div>

        </div>
    </div>
} 

CartProduct.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
}

export default CartProduct