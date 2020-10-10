import React from "react"
import { shallow } from "enzyme"

import CartCard from "../../../../components/Cart/CartCard/CartCard"

import { dummyCartData } from "../../../../test_files/dummyTestData"

const { imgUrl, name, price,
    id, dispatch, action, quantity } = dummyCartData

test('Should render CartCard from \nCart', () => {
    const wrapper = shallow(<CartCard imgUrl={imgUrl} name={name}
        price={price} id={id} dispatch={dispatch} action={action} quantity={quantity} />)

    expect(wrapper).toMatchSnapshot()
})