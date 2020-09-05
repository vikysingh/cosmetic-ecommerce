import React from "react"
import { Row, Col } from "antd"
import PropTypes from "prop-types"

function Grid({ leftCol, rightCol, leftSpan, rightSpan }) {
    return <Row>
        <Col xs={24} lg={leftSpan}>
            { leftCol }
        </Col>
        <Col xs={24} lg={rightSpan}>
            { rightCol }
        </Col>
    </Row>
}

Grid.propTypes = {
    leftCol: PropTypes.element.isRequired,
    rightCol: PropTypes.element.isRequired,
    leftSpan: PropTypes.number.isRequired,
    rightSpan: PropTypes.number.isRequired,
}

export default Grid