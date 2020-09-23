import React from 'react'

import { Provider } from "react-redux"
import store from "./redux/store/store"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import routes from "./constants/routes.json"

import { Home, ProductDetail, Contact, Shop, Cart } from "./pages"

import { Navbar, Footer } from "./components"
import "./styles/App.css"

export default function App() {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    <Route path={routes.home} exact>
                        <Navbar />
                        <Home />
                        <Footer />
                    </Route>

                    <Route path={routes.shop} exact>
                        <Navbar />
                        <Shop />
                        <Footer />
                    </Route>

                    <Route path={routes.productDetail} exact>
                        <Navbar />
                        <ProductDetail />
                        <Footer />
                    </Route>

                    <Route path={routes.cart} exact>
                        <Navbar />
                        <Cart />
                        <Footer />
                    </Route>

                    <Route path={routes.contact}>
                        <Navbar />
                        <Contact />
                        <Footer />
                    </Route>

                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
