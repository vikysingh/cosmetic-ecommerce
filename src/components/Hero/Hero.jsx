import React from 'react';
import { Typography, Button, Row, Col } from 'antd';

import globalStyles from "../../styles/globalStyle.module.css"
import heroStyles from "./Hero.module.css"

import Bg from "../../assets/images/hero_bg.png"

import { Link } from "react-router-dom"

const { Title, Paragraph } = Typography;

function Hero() {
    return (
        <div id={heroStyles.hero} >
            <Row>
                <Col lg={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} 
                className={globalStyles.flexColumnStartStart}
                id={heroStyles.hero_text_container} >
                    <Title level={1} > The makeup shop you've been always looking for </Title>
                    
                        <Paragraph id={heroStyles.hero_paragraph} > 
                        Give your dining room a wondrous and inviting look by   introducing </Paragraph>
                    
                    <Link to="/shop">
                        <Button size="large"  > + SHOP NOW </Button>
                    </Link>
                </Col>
                
                <Col lg={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }}  id={heroStyles.hero_img_container}
                >
                    
                    <img src={Bg} alt="Jewelery" />
                    
                </Col>
            </Row>
        </div>
    )
}

export default Hero;