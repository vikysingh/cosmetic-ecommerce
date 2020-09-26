const initialState = {
    filters: {
        brand: '',
        product: '',
        minPrice: 0,
        maxPrice: 100
    },
    cart: {
        products: [ /* { id, name, imgUrl, price }  */ ],
        pricing: {
            subTotal: 0,
            shippingPrice: 5.00
        }
    }
}

export default initialState