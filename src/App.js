import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./app.css"
import { Home, Shop } from "./pages"
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
            </Switch>
        </BrowserRouter>
    )
}

export default App;
