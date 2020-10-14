import React from "react"
import Filter from "../../../../components/Shop/Filter/Filter"

import { shallow } from "enzyme"
import ProductStatics from "../../../../constants/ProductStatics.json"

test('Should render Filter from Shop', () => {
    const wrapper = shallow(<Filter title="Products" filterList={ProductStatics.productType} type="products" />)

    expect(wrapper).toMatchSnapshot()
})