import React from 'react'

import { Hero, /*ProductBar,*/ BigLabel, Newsletter, ProductMapper, DiscountBanner } from "../../components"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div id={styles.HOME}>
            <Hero />
            { /* <ProductBar /> */ }
            <BigLabel />
            <ProductMapper />
            <DiscountBanner />
            <Newsletter />
        </div>
    )
}
 