import React from 'react'

import { Hero, ProductBanner, BigLabel, Newsletter, ProductHomeMapper, DiscountBanner } from "../../components"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div id={styles.HOME}>
            <Hero />
            <ProductBanner /> 
            <BigLabel />
            <ProductHomeMapper />
            <DiscountBanner />
            <Newsletter />
        </div>
    )
}
 