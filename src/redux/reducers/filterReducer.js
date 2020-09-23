import initialState from "./initialState"

import { SET_BRAND, SET_MIN_PRICE, SET_MAX_PRICE, SET_PRODUCT, 
    REMOVE_BRAND, REMOVE_PRODUCT, REMOVE_MIN_PRICE, REMOVE_MAX_PRICE } from "../actions/filters/filterActionTypes"

export default function filterReducer(state = initialState.filters, action) {
    switch(action.type) {
        case SET_BRAND:
            return { ...state, brand: action.payload };
        case SET_PRODUCT:
            return {  ...state, product: action.payload };
        case SET_MIN_PRICE:
            return {  ...state, minPrice: action.payload }
        case SET_MAX_PRICE:
            return {  ...state, maxPrice: action.payload }
        case REMOVE_BRAND:
            return { ...state, brand: action.payload }
        case REMOVE_PRODUCT:
            return { ...state, product: action.payload }
        case REMOVE_MIN_PRICE:
            return { ...state, minPrice: action.payload }
        case REMOVE_MAX_PRICE:
            return { ...state, maxPrice: action.payload }
        default:
            return state
    }
}

