import initialState from "./initialState"

import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/cart/cartActionTypes"

export function mapperState(stateArray, condition, id) {
    let holder = [...stateArray]

    if(condition === 'remove') {
        holder.map(each => {
            if(each.id === id) {
                holder.splice(stateArray.indexOf(each), 1)
            }
        })
    }

    else if (condition === 'increase') {
        holder.map(product => {
            if(product.id === id) {
                if(product.quantity < 10) {
                    product.quantity++
                    product.price = (product.basePrice * product.quantity).toFixed(2)
                    // console.log("length: ", product.price)
                    // if(product.price.length < 4) product.price = product.price.toFixed(2)
                }
            }
        })
    }

    else if (condition === 'decrease') {
        holder.map(product => {
            if(product.id === id) {
                if(product.quantity > 1) {
                    product.quantity--
                    product.price = (product.basePrice * product.quantity).toFixed(2)
                    // if(product.price.length < 4) product.price = product.price.toFixed(2)
                }
            }
        })
    }

    return holder
}

function productReducer(state = initialState.cart.products, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return [ ...state, { id: action.payload.id, price: action.payload.price,
            basePrice: action.payload.basePrice,
            imgUrl: action.payload.imgUrl, name: action.payload.name, quantity: action.payload.quantity }]
            
        case REMOVE_FROM_CART:
            return mapperState(state, 'remove', action.payload.id)
        
        case INCREASE_QUANTITY:
            return mapperState(state, 'increase', action.payload.id)

        case DECREASE_QUANTITY:
            return mapperState(state, 'decrease', action.payload.id)

        default:
            return state
    }
}

export default productReducer