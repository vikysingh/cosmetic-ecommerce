import { SET_BRAND, SET_PRODUCT, SET_MIN_PRICE, SET_MAX_PRICE, 
    REMOVE_BRAND, REMOVE_MIN_PRICE, REMOVE_MAX_PRICE, REMOVE_PRODUCT
 } from "./filterActionTypes"

export const setBrand = (brand = '') => ({
    type: SET_BRAND,
    payload: { brand }
})

export const setProduct = (product = '') => ({
    type: SET_PRODUCT,
    payload: {product}
})

export const setMinPrice = (price = 0) => ({
    type: SET_MIN_PRICE,
    payload: {price}
})

export const setMaxPrice = (price = 100) => ({
    type: SET_MAX_PRICE,
    payload: {price}
})

export const removeBrand = () => ({
    type: REMOVE_BRAND,
    payload: { brand: '' }
})

export const removeProduct = () => ({
    type: REMOVE_PRODUCT,
    payload: { product: '' }
})

export const removeMinPrice = () => ({
    type: REMOVE_MIN_PRICE,
    payload: { price: 0 }
})

export const removeMaxPrice = () => ({
    type: REMOVE_MAX_PRICE,
    payload: { price: 100 }
})