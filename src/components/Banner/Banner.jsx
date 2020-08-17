import React from 'react';
import { Row, Col, Typography, Button } from "antd"
import styles from "./Banner.module.css"

const { Title } = Typography;

const imgUrl ="https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-creme-to-powder-blush.png"

function Banner() {
    return (
        <Row className={styles.banner}>
            <Col lg={{ span: 12 }} sm={{ span: 12 }} >
                <img src={imgUrl} alt="" />
            </Col>
            <Col lg={{ span: 8 }} sm={{ span: 8 }} >
                <Title level={2}> Sale up to</Title>
                <Title level={1}>70% </Title>
                <Button> SHOP NOW </Button>
            </Col>
        </Row>
    )
}

export default Banner;
