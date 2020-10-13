import React from 'react'

import { DashboardCard } from "../../components"
import {  Typography, Row, Col, Button } from "antd"

import styles from "./Dashboard.module.css"
import globals from "../../styles/Globals.module.css"

const {
    Title, 
    //Paragraph
}  =Typography

const cardsList=[ { 
    imgLink: 'https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png',
    name: "Product Name"
 },
 { 
    imgLink: 'https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png',
    name: "Product Name"
 },
 { 
    imgLink: 'https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png',
    name: "Product Name"
 },
 { 
    imgLink: 'https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png',
    name: "Product Name"
 }, ]

export default function Dashboard() {
    

    return (
        <div className={styles.DASHBOARD}>
        <Row  >
            <Col xs={24} lg={8} >
            <DashboardCard title="Active orders" cardsList={[ 'each1', 'each2' ]} >
                {/*<Paragraph> Nothing to show here </Paragraph>*/}
                {cardsList.map(card => <div 
                    className={`${styles.DASHBOARD__PRODUCT_CARD} ${globals.flexRowStartCenter}`} >
                        <img alt="" src={card.imgLink} />
                        <h3> {card.name} </h3>
                    </div> )}
            </DashboardCard>
        </Col>
            <Col xs={24} lg={8} >
            <DashboardCard title="Order history">
                {cardsList.map(card => <div 
                    className={`${styles.DASHBOARD__PRODUCT_CARD} ${globals.flexRowStartCenter}`} >
                        <img alt="" src={card.imgLink} />
                        <h3> {card.name} </h3>
                    </div> )}
            </DashboardCard>
        </Col>
            <Col xs={24} lg={8} >
        <DashboardCard title="Lifetime spent">
                <Title className={styles.DASHBOARD__PRICE_TITLE} level={1} > €50.00 </Title>
            </DashboardCard>
        </Col>
        </Row>
        <Row className={globals.flexAllCenter} >
            <Button danger> Delete my account </Button>
        </Row>
        </div>
    )
}
