import React from "react"
import globalStyles from "../../../styles/globalStyle.module.css"

function ProductQuantity() {
    return <div className={globalStyles.flexAllCenter} >
        <button>-</button>
        <input type="number" max={10} min={1} />
        <button>+</button>
    </div>
}

export default ProductQuantity