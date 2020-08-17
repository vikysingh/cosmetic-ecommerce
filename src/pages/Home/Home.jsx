import React from 'react';
import { Typography } from "antd"
import { Layout, Navbar, Hero, Footer, ProductMapper, Banner } from "../../components"

import styles from "./Home.module.css"
const { Title, Paragraph } = Typography

function Home() {
    return (
        <div className={styles.HOME} >
            <Layout header={<><Navbar /> <Hero /> </>} main={<>
            <ProductMapper headContent={<div className={styles.HOME_product_mapper__head} > 
                <Title level={2} > New Arrivals </Title>
                <Paragraph> Add our new arrivals to your weekly lineup </Paragraph>
                 </div>} />
            <Banner />
            </>} footer={<Footer />} />
        </div>
    )
}

export default Home;
