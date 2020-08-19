import React, { useState } from 'react';

import { Menu } from "antd"
import 'antd/dist/antd.css';

import globalStyles from "../../styles/globalStyle.module.css"
import navStyles from "./Navbar.module.css"

const { SubMenu, ItemGroup, Item } = Menu

function Nav() {
    const [ current, setCurrent ] = useState("")
    
    return (
        <nav id={navStyles.NAVBAR} className={globalStyles.flexRowAroundCenter} >
            <span className={globalStyles.flexAllCenter} id={navStyles.NAVBAR__logo} >logo</span>

            <Menu onClick={e => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" >
                <Item key="home">
                    <a href="/">
                        Home
                    </a>
                </Item>
                <SubMenu title="Shop">

                <ItemGroup title="Clothing">

                    <Item key="setting:1">Men</Item>
                    <Item key="setting:2">Women</Item>

                </ItemGroup>

                <ItemGroup title="Other">

                    <Item key="setting:3">Electronics</Item>
                    <Item key="setting:4">Jewelery</Item>

                </ItemGroup>

                </SubMenu>

                <Item key="contact">
                    <a href="/contact">
                        Contact
                    </a>
                </Item>
            </Menu>

            <span className={globalStyles.flexAllCenter} id={navStyles.NAVBAR__user_options}  >features</span>
        </nav>
    )
}

export default Nav;
