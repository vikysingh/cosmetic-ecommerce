
//Importing cart action generators
import { addToCart, removeFromCart, decreaseQuantity, 
    increaseQuantity } from "../../../../redux/actions/cart/cartActionGenerators"

//Importing dummyData
import { dummyCartData } from "../../../../test_files/dummyTestData"

const { id, price, basePrice, imgUrl, name, quantity } = dummyCartData

test('Returns payload object and type - addToCart actionGen', () => {
    expect(addToCart(id, price, basePrice, imgUrl, name, quantity)).toMatchObject({
        type: 'ADD_TO_CART',
        payload: { id, price, basePrice, imgUrl, name, quantity }
    })
})

test('Returns the payload object with id param passed - removeFromCart actionGen', () => {
    expect(removeFromCart(id)).toMatchObject({
        type: 'REMOVE_FROM_CART',
        payload: {
            id
        }
    })
})

test('Returns and object with type and payload property - decreaseQuantity actionGen', () => {
    expect(decreaseQuantity(id)).toMatchObject({
        type: 'DECREASE_QUANTITY',
        payload: { id }
    })
})

test('Returns and object with type and payload property - increaseQuantity actionGen', () => {
    expect(increaseQuantity(id)).toMatchObject({
        type: 'INCREASE_QUANTITY',
        payload: { id }
    })
})
