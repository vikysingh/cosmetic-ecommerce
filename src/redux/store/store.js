import { createStore } from "redux"

import filterReducer from "../reducer/reducer"

const store = createStore(filterReducer)

store.subscribe(() => console.log("STORE: ", store.getState()))


export default store