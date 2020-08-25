import React from 'react'
import styles from "./Sidebar.module.css"

import globalStyles from "../../../styles/globalStyle.module.css"

export default function Sidebarcard({ heading, list }) {
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
