import React from "react"
import styles from "./Notice.module.css"

import { WarningOutlined } from "@ant-design/icons"

export default function Notice() {
    return <div className={` paragraph setSection ${styles.NOTICE}`} > 
        <WarningOutlined className={` titleHeading ${styles.NOTICE__icon}`} />
        Site is still in development!
    </div>
}