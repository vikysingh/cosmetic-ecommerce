import { SET_BRAND, SET_MIN_PRICE, SET_MAX_PRICE, SET_PRODUCT, 
    REMOVE_BRAND, REMOVE_PRODUCT, REMOVE_PRICE } from "../actions/actionTypes"

const initialState = {
    filters: {
        brand: '',
        product: '',
        minPrice: 0,
        maxPrice: 100
    }
}

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
            return { ...state, brand: '' }
        case REMOVE_PRODUCT:
            return { ...state, product: '' }
        case REMOVE_PRICE:
            return { ...state, minPrice: 0, maxPrice: 0 }
        default:
            return state
    }
}