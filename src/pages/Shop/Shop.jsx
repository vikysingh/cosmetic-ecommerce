import React from "react"
import { Row, Col } from "antd"

import { Filterbar, ProductMapper, FilterDisplayer } from "../../components"

export default function Shop(props) {

    return <Row>
        <Col lg={5} xs={24}>
            <Filterbar/>
        </Col>
        <Col lg={19} xs={24}>
            <FilterDisplayer />
            <ProductMapper />
        </Col>
    </Row>
}