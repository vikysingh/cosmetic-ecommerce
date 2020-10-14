import React from "react"
import { shallow } from "enzyme"
//import { toMatchImageSnapshot } from 'jest-image-snapshot';
import DiscountBanner from "../../../../components/Home/DiscountBanner/DiscountBanner"

test('Should render DiscountBanner from home', () => {
    const wrapper = shallow(<DiscountBanner />)
    expect(wrapper).toMatchSnapshot()
    
    //expect(wrapper.find('h1').text()).toBe(' Cosmetic Commerce ')
})