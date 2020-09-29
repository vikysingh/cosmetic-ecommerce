import React from "react"

import styles from "./ProductBanner.module.css"
import globalStyles from "../../../styles/Globals.module.css"

import makeupEye from "../../../assets/images/makeup_eye.jpg"
import makeupLip from "../../../assets/images/makeup_lip.jpg"
import makeupFace from "../../../assets/images/makeup_face.jpg"
import ProductStatics from "../../../constants/ProductStatics.json"

import ProductBannerCard from "./ProductBannerCard"

export default function ProductBanner() {
    return <div className={globalStyles.flexRowAroundCenter} id={styles.PRODUCT_BANNER} >
        <ProductBannerCard imgSrc={makeupEye} text="EYES" productType={ProductStatics.productType[3]} />
        <ProductBannerCard imgSrc={makeupLip} text="LIPS" productType={ProductStatics.productType[7]} />
        <ProductBannerCard imgSrc={makeupFace} text="FACE" productType={ProductStatics.productType[5]} />
    </div>
}