import React from 'react';
import { Button } from "antd"
import { Link } from "react-router-dom"

import styles from "./ShopButton.module.css"

function ShopButton({ children, link }) {
    return (
        <Link to={link} className={styles.SHOP_BUTTON} >
            <Button>
                { children }
            </Button>
        </Link>
    )
}

export default ShopButton;
