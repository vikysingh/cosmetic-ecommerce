import React from "react"

import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
//import { InputNumber } from "antd"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./ProductQuantity.module.css"


function ProductQuantity({ quantity, setQuantity }) {

    //const [ quantity, setQuantity ] = React.useState(1)

    return <div className={globalStyles.flexRowStartCenter} id={styles.PRODUCT_QUANTITY} >
        <PlusOutlined id={styles.PRODUCT_QUANTITY__btn}
        onClick={() => {
            if(quantity < 10) setQuantity(quantity => quantity + 1)
        }}
         />
            {/* <InputNumber min={1} max={10} defaultValue={1} ref={numbRef} /> */}
            <label > { quantity } </label>
            
        <MinusOutlined id={styles.PRODUCT_QUANTITY__btn} 
        onClick={() => {
            if(quantity > 1) setQuantity(quantity => quantity -1)
        }}/>
    </div>
}

export default ProductQuantity