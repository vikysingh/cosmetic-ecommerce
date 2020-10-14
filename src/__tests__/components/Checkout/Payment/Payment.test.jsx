import React from "react"
import { shallow } from "enzyme"

import PaymentLeftCol from "../../../../components/Checkout/Payment/PaymentLeftCol"

test('Should render Payment from Checkout', () => {
    const wrapper = shallow(<PaymentLeftCol />)

    expect(wrapper).toMatchSnapshot()
})