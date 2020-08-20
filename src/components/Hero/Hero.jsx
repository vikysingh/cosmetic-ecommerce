import React from 'react';
import { Typography, Button, Row, Col } from 'antd';

import globalStyles from "../../styles/globalStyle.module.css"
import heroStyles from "./Hero.module.css"

import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography;

function Hero() {
    return (
        <div id={heroStyles.hero} >
            <Row>
                <Col lg={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} 
                className={globalStyles.flexColumnStartStart}
                id={heroStyles.hero_text_container} >
                    <Title> Best selling Dining Chairs For You </Title>
                    
                        <Paragraph id={heroStyles.hero_paragraph} > 
                        Give your dining room a wondrous and inviting look by   introducing </Paragraph>
                    
                    <Link to="/shop">
                        <Button size="large"  > + SHOP NOW </Button>
                    </Link>
                </Col>
                
                <Col lg={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} 
                className={globalStyles.flexAllCenter}  id={heroStyles.hero_img_container}>
                    
                    <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="Jewelery" />
                    
                </Col>
            </Row>
        </div>
    )
}

export default Hero;