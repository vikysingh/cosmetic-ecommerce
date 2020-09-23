import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActionTypes"

export const addToCart = (id, price) => ({
    type: ADD_TO_CART,
    payload: { id, price }
})

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: id
})