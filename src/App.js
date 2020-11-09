import React from 'react'

import { Provider } from "react-redux"
import store from "./redux/store/store"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import routes from "./constants/routes.json"

import { Home, ProductDetail, Contact, Shop, Cart, 
    ShippingReturn, NotFound } from "./pages"

import Layout from "./pages/Layout"

import "./styles/css/main.css"
import 'antd/dist/antd.css';

export default function App() {

    return (
        <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    <Route path={routes.home} exact>
                        <Layout>
                            <Home />
                        </Layout>
                    </Route>

                    <Route path={routes.shop}>
                        <Layout>
                            <Shop />
                        </Layout>
                    </Route>

                    <Route path={routes.productDetail} exact>
                        <Layout>
                            <ProductDetail />
                        </Layout>
                    </Route>

                    <Route path={routes.cart}>
                        <Layout>
                            <Cart />
                        </Layout>
                    </Route>

                    <Route path={routes.contact}>
                        <Layout>
                            <Contact />
                        </Layout>
                    </Route>

                    <Route path={routes.shippingReturn}>
                        <Layout>
                            <ShippingReturn />
                        </Layout>
                    </Route>

                    <Route path="*" >
                        <Layout>
                            <NotFound />
                        </Layout>
                    </Route>

                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
