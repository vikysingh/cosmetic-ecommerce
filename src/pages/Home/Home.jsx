import React from 'react';
// import { Typography } from "antd"
import { Layout, Navbar, Hero, Footer, Brandbar, Banner, DiscountBanner } from "../../components"

import styles from "./Home.module.css"
//import globalStyles from "../../styles/globalStyle.module.css"


// const { Title, Paragraph } = Typography

function Home() {
    return (
        <div className={styles.HOME} >
            <Layout header={<>
            <Navbar />
            <Brandbar />
            <Hero />
            </>} main={<>

            <Banner />

            {/* <ProductMapper customSize={9} headContent={<div className={styles.HOME_product_mapper__head} > 
                <Title level={2} > POPULAR PRODUCTS </Title>
                <Paragraph> Add our new arrivals to your weekly lineup </Paragraph>
                 </div>} /> */}
            {/* <Banner /> */}
            <DiscountBanner />
            </>} footer={<Footer />} />
        </div>
    )
}

export default Home;
