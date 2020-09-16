import React, { useRef } from 'react';
import { Link } from "react-router-dom"

import { Typography } from "antd"
import 'antd/dist/antd.css';

import { UserOutlined, ShoppingCartOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons"

import globalStyles from "../../../styles/Globals.module.css"
import navStyles from "./Navbar.module.css"

import routes from "../../../constants/routes.json"

const {  Title } = Typography

function Nav() {

    const NavContentRef = useRef(null)
    const NavOpenerRef = useRef(null)
    const NavCloserRef = useRef(null)

    //opens the navbar
    function open() {
        NavContentRef.current.style.transform ="scaleY(1)"
        changeMenu("closer")
    }

    //closes the navbar
    function close() {
        NavContentRef.current.style.transform = "scaleY(0)"
        changeMenu("opener")
    }

    //changes the menu icons
    function changeMenu(menuType) {
        if(menuType === "closer") {
            NavOpenerRef.current.style.display = "none"
            NavCloserRef.current.style.display = "block"
        } else {
            NavOpenerRef.current.style.display = "block"
            NavCloserRef.current.style.display = "none"
        }
    }

    function closeFromChilds() {
        if(window.innerWidth <= 600) {
            close()
        }
    }
    
    return (
        <nav id={navStyles.NAVBAR} className={globalStyles.flexRowAroundCenter} >
            <Title level={3} className={globalStyles.flexAllCenter} id={navStyles.NAVBAR__logo} >
                CosmeticComerce
            </Title>

            <MenuOutlined id={navStyles.NAVBAR__opener}
            onClick={() => open()} ref={NavOpenerRef} />

            <CloseOutlined id={navStyles.NAVBAR__closer}
            onClick={() => close()} ref={NavCloserRef} />

            <div ref={NavContentRef}
            id={navStyles.NAVBAR__content} className={globalStyles.flexRowAroundCenter} >
                <div id={navStyles.NAVBAR__link_items} className={globalStyles.flexRowAroundCenter}>
                    <Link onClick={() => closeFromChilds()} to={routes.home} exact> Home </Link>
                    <Link onClick={() => closeFromChilds()} to={routes.shop}> Shop </Link>
                    <Link onClick={() => closeFromChilds()} to={routes.contact}> Contact us </Link>
                </div>

                <span className={globalStyles.flexRowAroundCenter} 
                id={navStyles.NAVBAR__user_options}>
                    <Link onClick={() => closeFromChilds()} to="/account" >
                        <UserOutlined />
                    </Link>
                    <Link onClick={() => closeFromChilds()} to="/cart" >
                        <ShoppingCartOutlined />
                    </Link>
                </span>
            </div>
        </nav>
    )
}

export default Nav;
