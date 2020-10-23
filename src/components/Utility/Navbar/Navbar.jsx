import React, { useRef } from 'react';
import { Link } from "react-router-dom"

import { ShoppingCartOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons"

import navStyles from "./Navbar.module.css"

import routes from "../../../constants/routes.json"

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
        <nav className={`flexRowAroundCenter ${navStyles.NAVBAR}`} >
            <h3 className={`flexAllCenter titleHeading successColor ${navStyles.NAVBAR__logo}`} >
                CosmeticComerce
            </h3>

            <MenuOutlined className={navStyles.NAVBAR__opener}
            onClick={() => open()} ref={NavOpenerRef} />

            <CloseOutlined className={navStyles.NAVBAR__closer}
            onClick={() => close()} ref={NavCloserRef} />

            <div ref={NavContentRef}
            className={`flexRowAroundCenter ${navStyles.NAVBAR__content}`} >

                <div className={`flexRowAroundCenter ${navStyles.NAVBAR__link_items}`}>

                    <Link onClick={() => closeFromChilds()}
                    className="paragraph"
                     to={routes.home} exact> Home </Link>
                     
                    <Link onClick={() => closeFromChilds()}
                    className="paragraph"
                     to={routes.shop}> Shop </Link>
                     
                    <Link onClick={() => closeFromChilds()}
                    className="paragraph"
                     to={routes.contact}> Contact us </Link>
                     
                </div>

                <span className={`flexRowAroundCenter ${navStyles.NAVBAR__user_options} `} >
                    <Link onClick={() => closeFromChilds()} to={routes.cart} >
                        <ShoppingCartOutlined />
                    </Link>
                </span>
            </div>
        </nav>
    )
}

export default React.memo(Nav)
