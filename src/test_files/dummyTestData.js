export const dummyCartData = {
    id: 49,
    price: '14.99',
    basePrice: '14.99' ,
    imgUrl: 'some url',
    name: 'Product name',
    quantity: 4,
    type: 'type',
    description: 'description',
    dispatch: id => id
}

export const dummyFilterData = {
    brand: 'maybelline',
    product: 'eye liner',
    minPrice: 20.00 ,
    maxPrice: 50.00,
    dispatch: id => id,
    action: vals => vals,
    type: 'brand',
    name: 'Maybelline'
}

export const dummyCartProductData = [
    {
        id: dummyCartData.id,
        price: dummyCartData.price,
        basePrice: dummyCartData.basePrice,
        imgUrl: dummyCartData.imgUrl,
        name: dummyCartData.name,
        quantity: dummyCartData.quantity
    },
    {
        id: 23,
        price: dummyCartData.price,
        basePrice: dummyCartData.basePrice,
        imgUrl: dummyCartData.imgUrl,
        name: dummyCartData.name,
        quantity: dummyCartData.quantity
    }
]

export const dummyCartBoardData = {
    subrotal: 20.00,
    shippingPrice: 5.00,
    total: 25.00
}

export const dummyProductDetailData = {
    leftCol: {
        imgList: [ dummyCartData.imgUrl, dummyCartData.imgUrl ],
        alt: "Alt for images"
    }
}