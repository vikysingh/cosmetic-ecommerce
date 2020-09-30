import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "./cartActionTypes"

export const addToCart = (id, price, basePrice, imgUrl, name, quantity) => ({
    type: ADD_TO_CART,
    payload: { id, price, basePrice, imgUrl, name, quantity }
})

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: {
        id
    }
})

export const decreaseQuantity = id => ({
    type: DECREASE_QUANTITY,
    payload: { id }
})

export const increaseQuantity = id => ({
    type: INCREASE_QUANTITY,
    payload: { id }
})

// module.exports = {
//     removeFromCart
// }