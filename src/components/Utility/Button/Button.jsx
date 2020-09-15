import React from "react"
import { Button } from "antd"

import styles from "./Button.module.css"

export default function ThemeButton({ theme, children, type }) {
    return <Button className={styles[theme]} type={type} > { children } </Button>
}