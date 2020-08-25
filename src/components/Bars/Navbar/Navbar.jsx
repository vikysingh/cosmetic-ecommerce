import React from 'react';
import { Link } from "react-router-dom"

import { Typography } from "antd"
import 'antd/dist/antd.css';

import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons"

import globalStyles from "../../../styles/globalStyle.module.css"
import navStyles from "./Navbar.module.css"

const {  Title } = Typography

function Nav() {
    
    return (
        <nav id={navStyles.NAVBAR} className={globalStyles.flexRowAroundCenter} >
            <Title level={3} className={globalStyles.flexAllCenter} id={navStyles.NAVBAR__logo} >
                CosmeticComerce
            </Title>

            <div id={navStyles.NAVBAR__content} className={globalStyles.flexRowAroundCenter} >
                <div id={navStyles.NAVBAR__link_items} className={globalStyles.flexRowAroundCenter}>
                    <Link to="/" exact> Home </Link>
                    <Link to="/shop"> Shop </Link>
                    <Link to="/contact"> Contact us </Link>
                </div>

                <span className={globalStyles.flexRowAroundCenter} 
                id={navStyles.NAVBAR__user_options}>
                    <Link to="/account" >
                        <UserOutlined />
                    </Link>
                    <Link to="/cart" >
                        <ShoppingCartOutlined />
                    </Link>
                </span>
            </div>
        </nav>
    )
}

export default Nav;
