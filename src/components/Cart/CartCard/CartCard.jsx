import React from "react"

import { Typography } from "antd"
import { Link } from "react-router-dom"

import { DeleteOutlined } from "@ant-design/icons"

import styles from "./CardCard.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import { ProductQuantity } from "../../index"

const { Title } = Typography

function CartCard({ imgUrl, name, price, id, dispatch, action, quantity }) {

    return <div id={styles.CART_CARD} className={globalStyles.flexRowStartCenter} >
        <img src={imgUrl} alt="" />
        <div>
            <Title level={4}>
                <Link to={`product/${id}`} > {name} </Link>
            </Title> 
            <ProductQuantity id={id} quantity={quantity} />
            
            <h5> Total: €{price} </h5>
            <DeleteOutlined className={styles.CART_CARD__delete_icon}
            onClick={() => dispatch(action.removeFromCart(id))}
             />
        </div>
    </div>
}

export default React.memo(CartCard)