import React from 'react';
import styles from "./Banner.module.css"

import { BannerCard } from "../../index"

import BannerBg from "../../../assets/images/banner_bg.jpg"
import Blush from "../../../assets/images/blush_banner.jpg"
import Bronzer from "../../../assets/images/bronzer_banner.jpg"

import Foundation from "../../../assets/images/foundation_banner.jpg"
import LipLiner from "../../../assets/images/lip_liner_banner.jpg"

import globalStyles from "../../../styles/globalStyle.module.css"

function Banner() {
    return (
        <div id={styles.BANNER} className={globalStyles.flexColumnStartStart} >
            <BannerCard imgSrc={BannerBg} title="Shop our store" bgColor="pink" />
            <BannerCard imgSrc={Blush} title="The majestic blush made only for you" bgColor="#7AC6DD" />
            <BannerCard imgSrc={Bronzer} title="Bronzer to be used" />
            <BannerCard imgSrc={Foundation} title="Foundation awesome" bgColor="#7AC6DD" />
            <BannerCard imgSrc={LipLiner} title="Lip Liner for those lips" bgColor="pink" />
        </div>
    )
}

export default Banner;
