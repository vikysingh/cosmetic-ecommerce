import React from "react"
import { shallow } from "enzyme"

import LeftCol from "../../../../components/ProductDetail/LeftCol/LeftCol"
//import { dummyCartData, dummyCartProductData } from "../../../../test_files/dummyTestData"
import { dummyProductDetailData } from "../../../../test_files/dummyTestData"

test('Should render MapCartItems from Cart', () => {
    const wrapper = shallow(<LeftCol imgList={dummyProductDetailData.leftCol.imgList}
        alt={dummyProductDetailData.leftCol.alt} />)

    expect(wrapper).toMatchSnapshot()
})