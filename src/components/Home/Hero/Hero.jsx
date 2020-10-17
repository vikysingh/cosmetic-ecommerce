import React from 'react'
import { useHistory } from "react-router-dom"

import styles from "./Hero.module.css"

import { ArrowRightOutlined } from "@ant-design/icons"
import ThemeButton from "../../Utility/Button/Button"

// import { Row, Col } from "antd"

import routes from "../../../constants/routes.json" 

import bgImg from "../../../assets/images/home_hero_bg.png"

function Hero() {

    let history = useHistory()
    
    return (
        <div className={`${styles.HERO} setSection`} >
                <h1 className="mainHeading" >
                    BEST SEASON
                    <br />
                    <span className="successColor" >
                        SALE FOR YOU
                    </span>
                </h1>

                <ThemeButton type="button" 
                clickHandler={() => history.push(routes.shop)}
                > SHOP NOW
                    <ArrowRightOutlined className={styles.HERO__btn_icon} />
                </ThemeButton>
            
            <img src={bgImg} alt="" />
            
        </div>
    )
} 

export default Hero;
