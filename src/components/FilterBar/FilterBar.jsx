import React from 'react';
import { Input } from "antd"

import FilterSelect from '../FilterSelect/FilterSelect';
import styles from "./FilterBar.module.css"

import globalStyles from "../../styles/globalStyle.module.css"

import filters from "../../constant/filters.json"

function FilterBar() {

    return (
        <div className={globalStyles.flexRowAroundCenter} id={styles.filterBar} >

            <div className={globalStyles.flexRowAroundCenter}>
                <FilterSelect itemsToMap={filters.brand} name="Brand"  selectClass={styles.select}
                childClass={styles.childSelect} />

                <FilterSelect itemsToMap={filters.tags} name="Tags"  selectClass={styles.select}
                childClass={styles.childSelect} />

                <FilterSelect itemsToMap={filters.productType} name="Product" selectClass={styles.select}
                childClass={styles.childSelect}  />
            </div>

            <Input placeholder="Search for products..." />
        </div>
    )
}


export default FilterBar;
