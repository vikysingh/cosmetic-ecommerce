import { createStore, combineReducers } from "redux"

import { filterReducer, productReducer }from "../reducers"

const store = createStore(combineReducers({
    filters: filterReducer,
    cartProducts: productReducer,
}))


export default store