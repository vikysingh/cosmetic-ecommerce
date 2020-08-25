import React from 'react'
import{ Typography } from "antd"

import styles from "./Sidebar.module.css"

import SidebarCard from "./SidebarCard"

import filters from "../../../constant/filters.json"

const { Title } = Typography

export default function Sidebar() {
    return (
        <div id={styles.SIDEBAR} >
            <Title level={3}> Filters </Title>
            <SidebarCard heading={<Title level={4} > Brand </Title>} list={filters.brand} />
            <SidebarCard heading={<Title level={4} > Tags </Title>} list={filters.tags} />
            <SidebarCard heading={<Title level={4} > Product </Title>} list={filters.productType} />
        </div>
    )
}
