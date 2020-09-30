import React from "react"
import { Button } from "antd"

import styles from "./Button.module.css"

import PropTypes from "prop-types"

function ThemeButton({ theme, children, type, dispatch, clickHandler }) {
    
    const btnRef = React.useRef(null)

    function preClickHandler() {
        if(clickHandler !== undefined) clickHandler()
        else if (dispatch !== undefined) {
            dispatch()
            btnRef.current.disabled = true
            btnRef.current.textContent = 'Added to cart'
        }
        else if(clickHandler !== undefined && dispatch !== undefined) clickHandler()
    }
    return <Button ref={btnRef} className={styles[theme]} type={type} onClick={preClickHandler} > { children } </Button>
}

ThemeButton.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string
}

export default React.memo(ThemeButton)