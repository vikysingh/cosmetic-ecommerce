import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./app.css"
import { Home, Shop, ProductDetail } from "./pages"
import routes from "./constant/routes.json"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home}>
                    <Home />
                </Route>
                <Route exact path={routes.shop}>
                    <Shop />
                </Route>
                <Route exact path={routes.productDetail}>
                    <ProductDetail />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
