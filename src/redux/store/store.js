import { createStore, combineReducers } from "redux"

import { filterReducer, productReducer }from "../reducers"

const store = createStore(combineReducers({
    filters: filterReducer,
    cartProducts: productReducer,
    //cartPricing: cartReducer.pricingReducer
}))

store.subscribe(() => console.log("STORE: ", store.getState()))


export default store