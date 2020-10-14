import React from "react"
import { shallow } from "enzyme"

import ProductBanner from "../../../../components/Home/ProductBanner/ProductBanner"

test('Should render ProductBanner from Home', () => {
    const wrapper = shallow(<ProductBanner />)
    expect(wrapper).toMatchSnapshot()
})