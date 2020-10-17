import React from "react"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"
 

function ProductCard({ imgUrl, name, id }) {
    
    return (
        <Link to={`/product/${id}`}className="productCard flexCenterCenter" >
            <img src={imgUrl} alt="" />
            <h3 className="lasHeading" > {name} </h3>
        </Link>
    )
}

ProductCard.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default React.memo(ProductCard)