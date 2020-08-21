import React from 'react';
import { Typography } from "antd"
import { Layout, Navbar, Hero, Footer, ProductMapper, Banner, BannerCard } from "../../components"

import styles from "./Home.module.css"
import globalStyles from "../../styles/globalStyle.module.css"

import Blush from "../../assets/images/banner_bg_blush.jpg"
import Foundation from "../../assets/images/banner_bg_foundation.jpg"
import LipLiner from "../../assets/images/banner_bg_lip_liner.jpg"

const { Title, Paragraph } = Typography

function Home() {
    return (
        <div className={styles.HOME} >
            <Layout header={<><Navbar /> <Hero /> </>} main={<>

            <div className={globalStyles.flexRowAroundCenter} id={styles.HOME__banner_card_container} >
                <BannerCard  imgSrc={Blush} title="Top Branded Blush For You"  />
                <BannerCard  imgSrc={Foundation} title="Set The Beauty With Our Foundation"  />
                <BannerCard  imgSrc={LipLiner} title="Tickle Me Rainbow Lip Liner"  />
            </div>

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
