import React from "react"

import { Navbar,
        /*Notice,*/
        Footer } from "../components"

export default function Layout({ children }) {
    return <div>
        {/*<Notice />*/}
        <Navbar />
        { children }
        <Footer />
    </div>
}
