import React from 'react'

import { BrowserRouter, Switch, Route } from "react-router-dom"

import routes from "./constants/routes.json"

import { Home, ProductDetail, Contact } from "./pages"

import { Navbar, Footer } from "./components"
import "./styles/App.css"

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={routes.home} exact>
                    <Navbar />
                    <Home />
                    <Footer />
                </Route>

                <Route path={routes.productDetail} exact>
                    <Navbar />
                    <ProductDetail />
                    <Footer />
                </Route>

                <Route path={routes.contact}>
                    <Navbar />
                    <Contact />
                    <Footer />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
