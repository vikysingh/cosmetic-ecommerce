import React from 'react';
import styles from "./Hero.module.css"


import { ThemeButton } from "../../index"

function Hero() {
    
    return (
        <div id={styles.HOME__hero} >
            <h1> Cosmetic Commerce </h1>
            <ThemeButton theme="shop_reverse" > SHOP NOW </ThemeButton>
        </div>
    )
}

export default Hero;
