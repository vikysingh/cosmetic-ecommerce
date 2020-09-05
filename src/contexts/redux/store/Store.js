import { createStore } from "redux"
import { queryReducer } from "../reducers/QueryReducer"

let store = createStore(queryReducer)

export default store