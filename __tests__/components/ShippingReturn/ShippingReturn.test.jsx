import React from "React"
import { shallow } from "enzyme"

import TextContainer from "../../../components/ShippingReturn/TextContainer/TextContainer"

test('Should render TextContainer from ShippingReturn/TextContainer', () => {
    const wrapper = shallow(<TextContainer title="Title"> hello </TextContainer>)

    expect(wrapper).toMatchSnapshot()
})