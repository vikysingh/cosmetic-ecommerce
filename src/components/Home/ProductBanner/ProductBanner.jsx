import React from "react"

import { connect } from "react-redux"

import styles from "./ProductBanner.module.css"

import makeupEye from "../../../assets/images/makeup_eye.jpg"
import makeupLip from "../../../assets/images/makeup_lip2.jpg"
import makeupFace from "../../../assets/images/makeup_face.jpg"
import ProductStatics from "../../../constants/ProductStatics.json"

import ProductBannerCard from "./ProductBannerCard"
import { setProduct } from "../../../redux/actions/filters/filterActionGenerators"

function ProductBanner({ dispatch }) {
    return <div className={` ${styles.PRODUCT_BANNER} setSection flexCenterCenter`}  >
        <ProductBannerCard 
        title="COSMETIC EYES"
        imgSrc={makeupEye}
        setDispatch={() => dispatch(setProduct(ProductStatics.productType[3]))}
        text="EYES" />

        <ProductBannerCard 
        title="GLOW LIPS"
        imgSrc={makeupLip}
        setDispatch={() => dispatch(setProduct(ProductStatics.productType[7]))}
        text="AT BEST PRICES" />
        
        <ProductBannerCard 
        title="SHINING FACE"
        imgSrc={makeupFace}
        setDispatch={() => dispatch(setProduct(ProductStatics.productType[5]))}
        text="BEST QUALITY" />
        
    </div>
}

const mapStateToProps = state => state

export default React.memo(connect(mapStateToProps)(ProductBanner))