import React from "react"
import { Button } from "antd"

import PropTypes from "prop-types"

function ThemeButton({ children, type, clickHandler }) {

    return <Button
    className="primaryActionButton" type={type} onClick={clickHandler} > { children } </Button>
}

ThemeButton.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string
}

export default React.memo(ThemeButton)