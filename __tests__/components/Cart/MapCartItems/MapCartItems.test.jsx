import React from "react"
import { shallow } from "enzyme"

import MapCartItems from "../../../../components/Cart/MapCartItems/MapCartItems"
import { dummyCartData, dummyCartProductData } from "../../../../test_files/dummyTestData"

test('Should render MapCartItems from Cart', () => {
    const wrapper = shallow(<MapCartItems productList={dummyCartProductData}
        dispatch={dummyCartData.dispatch} />)

    expect(wrapper).toMatchSnapshot()
})