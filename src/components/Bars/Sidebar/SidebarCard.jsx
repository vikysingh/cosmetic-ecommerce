import React from 'react'
import PropTypes from "prop-types"

import styles from "./Sidebar.module.css"

import globalStyles from "../../../styles/globalStyle.module.css"

function Sidebarcard({ heading, list }) {
    return (
        <div id={styles.SIDEBAR_CARD} >
            { heading }
            <div className={globalStyles.flexRowAroundCenter} >
                {
                    list.map(card => <label key={card} > { card } </label>)
                }
            </div>
        </div>
    )
}

Sidebarcard.propTypes = {
    heading: PropTypes.element,
    list: PropTypes.array.isRequired
}

export default Sidebarcard