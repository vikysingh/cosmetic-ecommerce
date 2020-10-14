import Hero from "../../../../components/Home/Hero/Hero"
import React from "react"

import { shallow } from "enzyme"

test('Should render Hero from home', () => {
    const wrapper = shallow(<Hero />)
    expect(wrapper).toMatchSnapshot()
    
    //expect(wrapper.find('h1').text()).toBe(' Cosmetic Commerce ')
})