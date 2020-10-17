import React from "react"

import { TextContainer } from "../../components"

import styles from "./ShippingReturn.module.css"


export default function ShippingReturn() {
    return <div className={` setSection ${styles.SHIPPING_RETURN}`} >
        <h1 className="titleHeading" > Shipping and Returns </h1>
        <TextContainer title="Within European Union" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </TextContainer>
        
        <TextContainer title="International orders">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sunt libero commodi 
            nihil odio magnam exercitationem aperiam distinctio amet, at cumque ab harum sequi 
            repellendus enim! Dolore itaque quod ad.
        </TextContainer>
        
        <TextContainer title="Returns">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sunt libero commodi 
            nihil odio magnam exercitationem aperiam distinctio amet.
        </TextContainer>
    </div>
}