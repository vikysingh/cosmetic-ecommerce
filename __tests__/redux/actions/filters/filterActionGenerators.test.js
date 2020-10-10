import { setBrand, setProduct, setMinPrice, setMaxPrice, removeBrand, 
    removeProduct, removeMinPrice, removeMaxPrice
 } from "../../../../redux/actions/filters/filterActionGenerators"

import { dummyFilterData } from "../../../../test_files/dummyTestData"

const { brand, product, minPrice, maxPrice } = dummyFilterData

test ('Returns an object with payload and type property - setBrand actionGen', () => {
    expect(setBrand(brand)).toMatchObject({
        type: 'SET_BRAND',
        payload: {
            brand
        }
    })
})

test ('Returns an object with payload and type property - setProduct actionGen', () => {
    expect(setProduct(product)).toMatchObject({
        type: 'SET_PRODUCT',
        payload: {
            product
        }
    })
})

test ('Returns an object with payload and type property - setMinPrice actionGen', () => {
    expect(setMinPrice(minPrice)).toMatchObject({
        type: 'SET_MIN_PRICE',
        payload: {
            price: minPrice
        }
    })
})

test ('Returns an object with payload and type property - setMaxPrice actionGen', () => {
    expect(setMaxPrice(maxPrice)).toMatchObject({
        type: 'SET_MAX_PRICE',
        payload: {
            price: maxPrice
        }
    })
})

test ('Returns an object with payload and type property - removeBrand actionGen', () => {
    expect(removeBrand()).toMatchObject({
        type: 'REMOVE_BRAND',
        payload: {
            brand: ''
        }
    })
})

test ('Returns an object with payload and type property - removeProduct actionGen', () => {
    expect(removeProduct()).toMatchObject({
        type: 'REMOVE_PRODUCT',
        payload: {
            product: ''
        }
    })
})

test ('Returns an object with payload and type property - removeMinPrice actionGen', () => {
    expect(removeMinPrice()).toMatchObject({
        type: 'REMOVE_MIN_PRICE',
        payload: {
            price: 0
        }
    })
})

test ('Returns an object with payload and type property - removeMaxPrice actionGen', () => {
    expect(removeMaxPrice()).toMatchObject({
        type: 'REMOVE_MAX_PRICE',
        payload: {
            price: 100
        }
    })
})