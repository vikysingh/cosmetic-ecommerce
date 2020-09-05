import React from 'react'
import { Menu, Dropdown } from "antd"
import PropTypes from "prop-types"

import filters from "../../../constant/filters.json"


const { Item } = Menu

function Branddropdown({ label }) {
    const menu = (
        <Menu>
            {
                filters.productType.map(product => <Item key={product}> { product } </Item>)
            }
        </Menu>
    )
    return (
        <Dropdown overlay={menu}>
            <label>{ label } </label>
        </Dropdown>
    )
}

Branddropdown.propTypes = {
    label: PropTypes.string.isRequired
}

export default Branddropdown
