import React from "react"
import { shallow } from "enzyme"

import AddressInfo from "../../../../components/Checkout/AddressInfo/AddressInfo"

test('Should render AddressInfo from Checkout', () => {
    const wrapper = shallow(<AddressInfo />)

    expect(wrapper).toMatchSnapshot()
})