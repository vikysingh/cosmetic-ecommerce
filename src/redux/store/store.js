import { createStore, combineReducers } from "redux"

import { filterReducer, cartReducer }from "../reducers"

const store = createStore(combineReducers({
    filters: filterReducer,
    cartProducts: cartReducer.productReducer,
    //cartPricing: cartReducer.pricingReducer
}))

store.subscribe(() => console.log("STORE: ", store.getState()))


export default store