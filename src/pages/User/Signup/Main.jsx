import React from "react"

import { Login } from "../../../components"

import { Typography } from "antd"

import styles from "./Main.module.css"

//import bgImage from ""

const { Title } = Typography

export default function MainSignup() {
    return (
        <div className={styles.MAIN_LOGIN} >
            <div className="flexRowAroundCenter" >
                <Title level={3} > Login </Title>
                <Title level={3} > Register </Title>
            </div>
            <Login />
        </div>
    )
}