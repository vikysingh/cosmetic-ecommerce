import React from "react"
import {  Row, Col, Typography } from "antd"
import 'antd/dist/antd.css';

import styles from "./DiscountBanner.module.css"

import AboutImg from "../../../assets/images/foundation_banner.jpg"

const { Title } = Typography

export default function DiscountBanner() {
    return <Row
    id={styles.ABOUT} 
    >
        <Col lg={10} md={10} xs={24} 
        id={styles.ABOUT__left_col}
        >
            <Title level={1} >-25%</Title>
            <Title level={4}>
                A short but descriptive paragraph about this online shop/store.
            </Title>
        </Col>
        <Col lg={12} md={12} xs={24} 
        id={styles.ABOUT__right_col}
         className="flexCenterCenter">
            <img src={AboutImg} alt=""  />
        </Col>
    </Row>
}