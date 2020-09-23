import React from "react"
import styles from "./Notice.module.css"

import { WarningOutlined } from "@ant-design/icons"

export default function Notice() {
    return <div className={styles.NOTICE} > 
        <WarningOutlined className={styles.NOTICE__icon} />
        Site is still in development!
    </div>
}