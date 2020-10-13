import React from 'react'

import { Link } from "react-router-dom"

import styles from "./Hero.module.css"
import ThemeButton from "../../Utility/Button/Button"

import routes from "../../../constants/routes.json"

function Hero() {
    
    return (
        <div id={styles.HOME__hero} >
            <h1> Cosmetic Commerce </h1>
            <ThemeButton theme="shop_reverse" > <Link to={routes.shop}> SHOP NOW </Link> </ThemeButton>
        </div>
    )
} 

export default Hero;
