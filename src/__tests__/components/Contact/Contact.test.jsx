import React from "React"
import { shallow } from "enzyme"

import Form from "../../../components/Contact/Form/Form"

test('Should render Form from Contact/Form', () => {
    const wrapper = shallow(<Form />)

    expect(wrapper).toMatchSnapshot()
})