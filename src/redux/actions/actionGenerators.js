import { SET_BRAND, SET_PRODUCT, SET_MIN_PRICE, SET_MAX_PRICE, REMOVE_BRAND, REMOVE_PRICE, REMOVE_PRODUCT } from "./actionTypes"

const setBrand = (brand = '') => ({
    type: SET_BRAND,
    payload: brand
})

const setProduct = (product = '') => ({
    type: SET_PRODUCT,
    payload: product
})

const setMinPrice = (price = 0) => ({
    type: SET_MIN_PRICE,
    payload: price
})

const setMaxPrice = (price = 100) => ({
    type: SET_MAX_PRICE,
    payload: price
})

const removeBrand = () => ({
    type: REMOVE_BRAND
})

const removeProduct = () => ({
    type: REMOVE_PRODUCT
})

const removePrice = () => ({
    type: REMOVE_PRICE
})

const filters = {
    setBrand,
    setProduct,
    setMinPrice,
    setMaxPrice,
    removeBrand,
    removeProduct,
    removePrice
}

export default filters