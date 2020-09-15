import React from "react"

import { Typography, Input, Tooltip } from "antd"
import styles from "./Form.module.css"
import { ThemeButton } from "../../index"

const { Title } = Typography
const { TextArea } = Input

export default function ContactForm() {
    return <form action="post" className={styles.CONTACT_FORM}>
        <Title level={4}> Get in touch </Title>
        
        <Tooltip
            trigger={['focus']}
            title="Name"
            placement="topLeft"
            overlayClassName="text-input"
        >
            <Input
            type="text"
            placeholder="Name"
            />
      </Tooltip>

        <Tooltip
            trigger={['focus']}
            title="Email"
            placement="topLeft"
            overlayClassName="email-input"
        >
            <Input
            type="text"
            placeholder="Email"
            />
      </Tooltip>

        <Tooltip
            trigger={['focus']}
            title="Phone number"
            placement="topLeft"
            overlayClassName="tel-input"
        >
            <Input
            type="text"
            placeholder="Phone number"
            />
      </Tooltip>
      <Tooltip
        trigger={['focus']}
        title="Message"
        placement="topLeft"
        overlayClassName="text-input"
      >
        <TextArea
            placeholder="Your message"
            autoSize={{ minRows: 6, maxRows: 15 }}
            />
      </Tooltip>
      <ThemeButton theme="shop" type="submit"> Send </ThemeButton>
      
    </form>
}