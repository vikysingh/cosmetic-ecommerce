import React from 'react'

import { Navbar, Hero, ProductBar, BigLabel, Newsletter, Footer, ProductMapper, DiscountBanner } from "../../components"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div id={styles.HOME}>
            <Navbar />
             <Hero />
            <ProductBar />
            <BigLabel />
            <ProductMapper />
            <DiscountBanner />
            <Newsletter />
            <Footer />
        </div>
    )
}
