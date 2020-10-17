import React from 'react'

import { Form, Input, Checkbox   } from "antd"

import { ThemeButton } from "../../index"
import styles from "./Form.module.css"

const { Item } = Form

export default function Login(props) {
    

    return (
        <Form className={styles.LOGIN_FORM} >
            <Item
                label="Email address"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input type="email" />
            </Item>
            <Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
            >
                <Input type="password" />
            </Item>

            <Item valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Item>

            <ThemeButton theme="shop" > Login </ThemeButton>
        </Form>
    )
}
