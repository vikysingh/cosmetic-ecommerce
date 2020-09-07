import React from "react"
import { Typography, Row, Col } from "antd"

import styles from "./About.module.css"

const { Title, Paragraph } = Typography

export default function About() {
    return (
        <div id={styles.ABOUT} >
            <Title level={4}> Our mission </Title>
            <Paragraph>
                Donec imperdiet congue orci consequat mattis. 
                Donec rutrum porttitor sollicitudin. 
                Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
            </Paragraph>
            <Row>
                <Col span={12}>
                    <Title level={2}>
                        Credibly innovate granular internal or organic sources whereas standards.
                    </Title>
                </Col>
                <Col span={12}>
                    <Paragraph>
                        Seamlessly empower fully researched growth strategies 
                        and interoperable internal or “organic” sources. 
                        Credibly innovate granular internal or “organic”
                        sources whereas high standards in web-readiness.
                    </Paragraph>
                </Col>
            </Row>
            <Row>
                <Col span={5}>
                    credit card support
                </Col>
                <Col span={5}>
                    order online
                </Col>
                <Col span={5}>
                    free delivery
                </Col>
                <Col span={5}>
                    Product with gift card
                </Col>
            </Row>
            <div>
                slider
            </div>
            <div>
                call to action newsletter
            </div>
        </div>
    )
}

