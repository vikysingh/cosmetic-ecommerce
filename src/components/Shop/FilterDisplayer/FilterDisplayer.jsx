import React from "react"
import { CloseCircleOutlined } from "@ant-design/icons"
import { Typography } from "antd"

import styles from "./FilterDisplayer.module.css"

import globalStyles from "../../../styles/Globals.module.css"

const { Title } = Typography

export default function FilterDisplayer() {
    return (
        <div className={globalStyles.flexRowAroundCenter} id={styles.FILTER_DISPLAYER} >
            <Title level={4}> Filters:  </Title>

            <div> 
                <label>Product: </label>
                <strong> Eyeliner </strong>
                <CloseCircleOutlined id={styles.FILTER_DISPLAYER__close_icon} />
            </div>

            <div> 
                <label>Brand: </label>
                <strong> Maybelline </strong>
                <CloseCircleOutlined id={styles.FILTER_DISPLAYER__close_icon} />
            </div>

            <div>
                <label>Price: </label>
                <strong> €24.00 </strong>
                <CloseCircleOutlined id={styles.FILTER_DISPLAYER__close_icon} />
            </div>

        </div>
    )
}