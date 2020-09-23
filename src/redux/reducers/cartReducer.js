import initialState from "./initialState"

import { ADD_TO_CART } from "../actions/cart/cartActionTypes"

export default function cartReducer(state = initialState.products, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return [ ...state, { id: action.payload.id, price: action.payload.price }]
        default:
            return state
    }
}