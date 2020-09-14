import React from "react"
import { Typography, Input, Button } from "antd"
import globalStyles from "../../../styles/Globals.module.css"
import styles from "./Newsletter.module.css"

const { Title, Paragraph } = Typography

export default function Newsletter() {
    return <div className={globalStyles.flexColumnCenterCenter} id={styles.NEWSLETTER} >
        <Title level={4}> Subscribe to our newsletter </Title>
        <Paragraph> A short sentence describing what someone will receive </Paragraph>
        <form>
            <Input placeholder="Email" type="email" width="200" />
            <Button> Subscribe </Button>
        </form>
    </div>
}