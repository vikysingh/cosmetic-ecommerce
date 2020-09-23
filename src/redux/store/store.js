import { createStore, combineReducers } from "redux"

import { filterReducer, cartReducer }from "../reducers"

const store = createStore(combineReducers({
    filters: filterReducer,
    cart: cartReducer
}))

store.subscribe(() => console.log("STORE: ", store.getState()))


export default store