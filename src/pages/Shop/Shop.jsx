import React from 'react';

import { Layout, Navbar, FilterBar, ProductMapper, Footer } from "../../components"

function Shop() {
    return (
        <div>
            <Layout header={
            <>
                <Navbar />
                <FilterBar />
            </>
        } 
        main={
            <ProductMapper />
        } footer={<Footer />} />
        </div>
    )
}

export default Shop;
