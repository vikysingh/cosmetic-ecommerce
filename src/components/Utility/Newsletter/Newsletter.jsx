import React from "react"
import { Input } from "antd"

import ThemeButton from "../Button/Button"

import styles from "./Newsletter.module.css"

export default function Newsletter() {
    return <div className={`flexColAroundCenter ${styles.NEWSLETTER} `} >
        <h2 className="lastHeading" > Subscribe to our newsletter </h2>
        <p className="paragraph"> A short sentence describing what someone will receive </p>
        <form className="flexCenterCenter" >
            <Input placeholder="Email" type="email" width="200" />
            <ThemeButton> Subscribe </ThemeButton>
        </form>
    </div>
}