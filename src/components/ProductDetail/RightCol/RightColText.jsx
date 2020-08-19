import React from 'react';
import { Typography } from "antd"

import styles from "./RightCol.module.css"

const { Title, Paragraph } = Typography

function RightColText({ name, type, price, description }) {
    return (
        <>
            <Title level={2}> {name} </Title>
            <Title level={4}> {type} </Title>
            <Title level={3}> €{price} </Title>
            <Paragraph className={styles.RIGHT_COL__product_description}> {description} </Paragraph>
        </>
    )
}

export default RightColText;
