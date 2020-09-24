import React from "react"
import { Button } from "antd"

import styles from "./Button.module.css"

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

export default React.memo(ThemeButton)