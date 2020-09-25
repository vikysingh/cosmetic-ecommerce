import initialState from "./initialState"

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart/cartActionTypes"

export default function cartReducer(state = initialState.products, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return [ ...state, { id: action.payload.id, price: action.payload.price }]
        case REMOVE_FROM_CART:
            //console.log("state: ", state)
            let filtered = [...state]
            
            filtered.map(each => {
                if(each.id === action.payload.id) {
                    filtered.splice(state.indexOf(each), 2)
                }
            })

            return filtered
        default:
            return state
    }
}