import React from "react"

import { Typography } from "antd"

import { TextContainer } from "../../components"

import styles from "./ShippingReturn.module.css"

const { Title, } = Typography

export default function ShippingReturn() {
    return <div className={styles.SHIPPING_RETURN} >
        <Title level={1}> Shipping and Returns </Title>
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