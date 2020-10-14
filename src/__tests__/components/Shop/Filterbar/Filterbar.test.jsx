import React from "react"
import { shallow } from "enzyme"

import Filterbar from "../../../../components/Shop/Filterbar/Filterbar"

test('Should render Filterbar from Shop', () => {
    const wrapper = shallow(<Filterbar />)

    expect(wrapper).toMatchSnapshot()
})