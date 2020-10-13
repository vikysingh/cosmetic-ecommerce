import React from 'react'

import {  Typography } from "antd"

import styles from "./DashboardCard.module.css"

// import globals from "../../../styles/Globals.module.css"

const { Title }  =Typography

export default function Dashboardcard({ title, children }) {

    return (
        <div className={styles.DASHBOARD_CARD} >
            <Title level={4}> { title } </Title>
            { children }
        </div>
    )
}
