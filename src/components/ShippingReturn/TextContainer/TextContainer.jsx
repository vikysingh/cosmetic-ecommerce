import React from "react"

import { Typography } from "antd"

import styles from "./TextContainer.module.css"

const { Title, Paragraph } = Typography

export default function TextContainer({ title, children }) {
    return <div className={styles.TEXT_CONTAINER} >
        <Title level={4}> { title } </Title>
        <Paragraph>
            { children }
        </Paragraph>
    </div>
}