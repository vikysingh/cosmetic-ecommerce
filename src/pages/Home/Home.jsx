import React from 'react';
import styles from "./Home.module.css"

function Home({ children }) {
    return (
        <div className={styles.HOME} >
            { children }
        </div>
    )
}

export default Home;
