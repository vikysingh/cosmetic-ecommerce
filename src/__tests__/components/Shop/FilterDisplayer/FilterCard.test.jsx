import React from "react"
import { shallow } from "enzyme"

import FilterCard from "../../../../components/Shop/FilterDisplayer/FilterCard"
import { dummyFilterData } from "../../../../test_files/dummyTestData"

const { type,name, dispatch, action } = dummyFilterData

test('Should render FilterCard from Shop/FilterDisplayer', ()=> {
    const wrapper = shallow(<FilterCard type={type} name={name} dispatch={dispatch} action={action} />)

    expect(wrapper).toMatchSnapshot()
})