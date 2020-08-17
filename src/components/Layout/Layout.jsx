import React from 'react';
import styles from "./Layout.module.css"

function Layout({ header, main, footer }) {
    return (
        <div className={styles.LAYOUT} >
            <header> { header } </header>
            <main> { main } </main>
            <footer> { footer } </footer>
        </div>
    )
}

export default Layout;
