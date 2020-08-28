import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./app.css"
import { Home, Shop, ProductDetail } from "./pages"
import routes from "./constant/routes.json"

import { Navbar, Footer, Hero, Brandbar, Banner, DiscountBanner, 
    Sidebar, ProductMapper, SearchProduct, LeftCol, RightCol } from "./components"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home}>
                    <Navbar />
                    <Home>
                        <Brandbar />
                        <Hero />
                        <Banner />
                        <DiscountBanner />
                    </Home>
                    <Footer />
                </Route>
                <Route path={routes.shop}>
                    <Navbar />
                    <Shop leftCol={ <Sidebar /> } rightCol={
                        <>
                            <SearchProduct />
                            <ProductMapper />
                        </>
                    } />
                    <Footer />
                </Route>
                <Route path={routes.productDetail}>
                    <Navbar />

                    <ProductDetail leftCol={
                        (imgList, alt) => <LeftCol imgList={imgList} alt={alt} />
                    } rightCol={
                        (name, type, price, description) => <RightCol name={name} 
                        type={type} 
                        price={price} description={description}/>
                    } />

                    <Footer />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
