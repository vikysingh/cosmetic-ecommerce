import React from 'react';
import {  Typography } from "antd"
import PropTypes from "prop-types"

import Messages from "../../../config/Messages.json"
import globalStyles from "../../../styles/globalStyle.module.css"

const { Title } = Typography

function Message({ type }) {
    return (
        <Title className={globalStyles.flexAllCenter} 
        style={{ width: "100vw", height: "76vh"}} >
            { type === "loading" && Messages.loading }
            { type === "error" && Messages.error }
        </Title>
    )
}

Message.propTypes = {
    type: PropTypes.string.isRequired
}

export default Message;
