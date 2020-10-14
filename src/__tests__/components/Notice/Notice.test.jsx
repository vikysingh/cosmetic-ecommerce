import React from "react"
import { shallow } from "enzyme"

import Notice from "../../../components/Notice/Notice"

test('Should render Notice from Notice', () => {
    const wrapper = shallow(<Notice />)

    expect(wrapper).toMatchSnapshot()
})