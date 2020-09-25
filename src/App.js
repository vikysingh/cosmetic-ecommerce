import React from 'react'

import { Provider } from "react-redux"
import store from "./redux/store/store"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import routes from "./constants/routes.json"

import { Home, ProductDetail, Contact, Shop, Cart, ShippingReturn } from "./pages"

import { Navbar, Footer, Notice } from "./components"
import "./styles/App.css"

export default function App() {

    return (
        <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    <Route path={routes.home} exact={true}>
                        <Notice />
                        <Navbar />
                        <Home />
                        <Footer />
                    </Route>

                    <Route path={routes.shop}>
                        <Notice />
                        <Navbar />
                        <Shop />
                        <Footer />
                    </Route>

                    <Route path={routes.productDetail} exact={true}>
                        <Notice />
                        <Navbar />
                        <ProductDetail />
                        <Footer />
                    </Route>

                    <Route path={routes.cart}>
                        <Notice />
                        <Navbar />
                        <Cart />
                        <Footer />
                    </Route>

                    <Route path={routes.contact}>
                        <Notice />
                        <Navbar />
                        <Contact />
                        <Footer />
                    </Route>

                    <Route path={routes.shippingReturn}>
                        <Notice />
                        <Navbar />
                        <ShippingReturn />
                        <Footer />
                    </Route>

                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
