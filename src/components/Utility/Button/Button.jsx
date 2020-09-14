import React from "react"
import { Button } from "antd"

import styles from "./Button.module.css"

export default function ThemeButton({ theme, children }) {
    return <Button className={styles[theme]} > { children } </Button>
}