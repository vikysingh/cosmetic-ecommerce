import React from "react"

import { Typography, Input, Select, Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import checkouts from "../../../constants/checkouts.json"
import routes from "../../../constants/routes.json"
import { ThemeButton } from "../../index"

import styles from "./AddressInfo.module.css"

const { Title } = Typography
const { Option } = Select
const { Item } = Breadcrumb 

export default function AddressInfo() {
    return <div className={styles.CHECKOUT__LEFT_COL} >
        <Breadcrumb className={styles.CHECKOUT__LEFT_COL__breadcrumb} >
            <Item>
                <Link to={routes.home}> Home </Link>
            </Item>
            <Item>
                <Link to={routes.cart}> Cart </Link>
            </Item>
            <Item>
                Address
            </Item>
        </Breadcrumb>
        <Title level={3}> Contact information </Title>
        <Input type="email" placeholder="Email" />
        <form>
            <Title level={4}> Shipping address </Title>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Address" />
            <Input type="text" placeholder="Apartment, suite etc.(optional)" />
            <Input type="text" placeholder="City" />
            <Select showSearch className={styles.CHECKOUT__LEFT_COL__select}
            placeholder="Country"
            optionFilterProp="children"
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            >
                { checkouts.countries.map(country => <Option value={country} key={country} > { country } </Option> ) }
            </Select>
            <Input pattern="[0-9]*" name="zip" type="text" />

            <ThemeButton theme="shop" >
                <Link to={routes.checkoutPayment}>
                    Go to payment
                </Link>
            </ThemeButton>  
        </form>
    </div>
}