import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./app.css"
import { Home, Shop, ProductDetail, Cart } from "./pages"
import routes from "./constant/routes.json"

import store from "./contexts/redux/store/Store"
import setQuery from "./contexts/redux/actions/SetQuery"

import { Navbar, Footer, Hero, Brandbar, Banner, DiscountBanner, 
    Sidebar, ProductMapper, SearchProduct, LeftCol, RightCol, CartSummary,
    CartProduct } from "./components"


function App() {
    store.subscribe(() => console.log(store.getState()))
    store.dispatch(setQuery("Hello from App"))

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home}>
                    <Navbar />
                    <Home>
                        
                        <Brandbar />
                        <Hero />
                        <Banner />
                        <ProductMapper urlMap="?product_type=eyeliner&brand=revlon" />
                        <DiscountBanner />
                    </Home>
                    <Footer />
                </Route>
                <Route path={routes.shop}>
                    <Navbar />
                    <Shop leftCol={ <Sidebar /> } rightCol={
                        <>
                            <SearchProduct />
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
                <Route path={routes.cart}>
                    <Navbar />
                    <Cart rightCol={<CartSummary />}
                    leftCol={
                    <>
                    <CartProduct
                        imgSrc="https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
                        name="Product" quantity={2} price="€20.00"  />
                    <CartProduct
                        imgSrc="https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
                        name="Product" quantity={2} price="€20.00"  />
                    <CartProduct
                        imgSrc="https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
                        name="Product" quantity={2} price="€20.00"  />
                    </>
                    } />
                    <Footer />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
