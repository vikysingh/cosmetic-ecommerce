import React from 'react';
import { Input } from "antd"

import FilterSelect from '../FilterSelect/FilterSelect';
import styles from "./FilterBar.module.css"

//import globalStyles from "../../styles/positioning.css"

import filters from "../../constant/filters.json"

function FilterBar() {

    return (
        <div /*className={globalStyles.flexRow}*/ id={styles.filterBar} >

            <div>
                <FilterSelect itemsToMap={filters.brand} name="Brand"  selectClass={styles.select}
                childClass={styles.childSelect} />

                <FilterSelect itemsToMap={filters.tags} name="Tags"  selectClass={styles.select}
                childClass={styles.childSelect} />

                <FilterSelect itemsToMap={filters.productType} name="Product" selectClass={styles.select}
                childClass={styles.childSelect}  />
            </div>

            <Input placeholder="Basic usage" />
        </div>
    )
}


export default FilterBar;
