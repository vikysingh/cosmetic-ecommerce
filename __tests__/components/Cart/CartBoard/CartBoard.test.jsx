import React from "react"
import {  shallow } from "enzyme"

import CartBoard from "../../../../components/Cart/CartBoard/CartBoard"
import { dummyCartBoardData } from "../../../../test_files/dummyTestData"

test('Should render CartBoard from Cart', () => {
    const wrapper = shallow(<CartBoard subtotal={dummyCartBoardData.subrotal}
        shippingPrice={dummyCartBoardData.shippingPrice} total={dummyCartBoardData.totla} />)

    expect(wrapper).toMatchSnapshot()
})