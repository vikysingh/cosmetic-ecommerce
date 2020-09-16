import React from "react"

import { Typography } from "antd"

import globalStyles from "../../../styles/Globals.module.css"
import styles from "./Filter.module.css"

const { Title } = Typography

export default function Filter({ title, filterList }) {
    return <div className={styles.FILTER} >
        <Title level={3}> {title} </Title>
        <div className={globalStyles.flexRowAroundCenter} >
            {
                filterList.map(item => <label key={item.value} > { item.name } </label>)
            }
        </div>
    </div>
}