//Importing the actual reducer
import { productReducer  } from "../../../redux/reducers"

//Importing initial state
import initialState from "../../../redux/reducers/initialState"

//Importing action generators
import { addToCart, removeFromCart, 
    increaseQuantity, decreaseQuantity } from "../../../redux/actions/cart/cartActionGenerators"

//Importing dummy filter data
import { dummyCartData, dummyCartProductData } from "../../../test_files/dummyTestData"

const { id, price, basePrice, imgUrl, name, quantity } = dummyCartData

test('Returns a state - productReducer - addToCart', () => {
    expect(productReducer(initialState.cart.products, addToCart(id, price, basePrice, imgUrl, name, quantity))).toEqual(expect.arrayContaining([
        ...initialState.cart.products,
        { id, price, basePrice, imgUrl, name, quantity }
    ]))
})

test('Returns a state - productReducer - removeFromCart', () => {
    expect(productReducer(dummyCartProductData, removeFromCart(id))).toEqual(expect.arrayContaining([ dummyCartProductData[1] ]))
})


//The increaseQuantity and deceaseQuantity are connected to each other, as they change
//the same array of objects and that's why decreaseQuantity test has quantity set to 4
//because incrementQuantity test increments it by 1
test('Returns a state - productReducer - increaseQuantity', () => {
    expect(productReducer(dummyCartProductData, increaseQuantity(id))).toEqual(expect.arrayContaining([ 
        { ...dummyCartProductData[0], quantity: 5 },
        dummyCartProductData[1]
    ]))
})

test('Returns a state - productReducer - decreaseQuantity', () => {
    expect(productReducer(dummyCartProductData, decreaseQuantity(id))).toEqual(expect.arrayContaining([ 
        { ...dummyCartProductData[0], quantity: 4},
        dummyCartProductData[1]
    ]))
})