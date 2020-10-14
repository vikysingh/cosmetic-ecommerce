import React from 'react'

import { Typography } from "antd"

import globals from "../../styles/Globals.module.css"

const { Title, Paragraph } = Typography

const styles = {
    height: "100vh",
    width: "100vw"
}

export default function Notfound(props) {
    
    return (
        <div className={globals.flexColumnCenterCenter} style={styles} >
            <Title level={1} > 404 </Title>
            <Paragraph> Oops... nothing here! </Paragraph>
        </div>
    )
}
