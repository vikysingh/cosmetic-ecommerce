import React from 'react'
import { Menu, Dropdown } from "antd"

import filters from "../../../constant/filters.json"
// import globalStyles from "../../../styles/globalStyle.module.css"

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

export default Branddropdown
