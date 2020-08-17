import React from 'react';
import { Typography, Button, Row, Col } from 'antd';

import styles from "./Hero.module.css"

const { Title, Paragraph } = Typography;

function Hero() {
    return (
        <div className={styles.hero} >
            <Row>
                <Col lg={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} className={styles.hero_text_container} >
                    <Title> Best selling Dining Chairs For You </Title>
                    
                        <Paragraph className={styles.hero_paragraph} > 
                        Give your dining room a wondrous and inviting look by   introducing </Paragraph>
                    
                    <Button size="large"  > + SHOP NOW </Button>
                </Col>
                <Col lg={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} className={styles.hero_img_container}>
                    
                    <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="Jewelery" />
                    
                </Col>
            </Row>
        </div>
    )
}

export default Hero;
// https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg