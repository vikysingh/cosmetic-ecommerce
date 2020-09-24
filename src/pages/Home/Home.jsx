import React from 'react'

import { Hero, /*ProductBar,*/ BigLabel, Newsletter, ProductHomeMapper, DiscountBanner } from "../../components"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div id={styles.HOME}>
            <Hero />
            { /* <ProductBar /> */ }
            <BigLabel />
            <ProductHomeMapper />
            <DiscountBanner />
            <Newsletter />
        </div>
    )
}
 