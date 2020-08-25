import React from 'react';
import { Navbar, Footer, Sidebar } from "../../components"

import styles from "./Shop.module.css"

function Shop() {
    
    return (
        <div className={styles.SHOP} >
            <section>
                <Navbar />
            </section>
            <section>
                <Sidebar />
                <div>producrs</div>
                <Footer />
            </section>
        </div>
    )
}

export default Shop;
