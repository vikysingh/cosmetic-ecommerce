import React from 'react';
import { Button } from "antd"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

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

ShopButton.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]).isRequired,
    link: PropTypes.string.isRequired
}

export default ShopButton;
