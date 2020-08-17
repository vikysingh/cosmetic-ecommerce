import React from 'react';
import { Select } from "antd"

const { Option } = Select

function FilterSelect({ itemsToMap, name, selectClass, childClass }) {

    return (
        <Select
        className={selectClass}
        showSearch

        placeholder={name}
        optionFilterProp="children"

        onChange={e => console.log("changed: e: ", e)}
        >
            {
                itemsToMap.map(each => <Option key={each} className={childClass} > {each} </Option>)
            }
        </Select>
    )
}


export default FilterSelect;
