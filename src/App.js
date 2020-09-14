import React from 'react'

import { BrowserRouter, Switch, Route } from "react-router-dom"

import routes from "./constants/routes.json"

import { Home, ProductDetail } from "./pages"
import "./styles/App.css"

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={routes.home} exact>
                    <Home />
                </Route>

                <Route path={routes.productDetail} exact>
                    <ProductDetail />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
