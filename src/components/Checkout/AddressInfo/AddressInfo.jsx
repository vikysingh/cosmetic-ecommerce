import React from "react"

import { Typography, Input, Select, Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import checkouts from "../../../constants/checkouts.json"
import routes from "../../../constants/routes.json"
// import { ThemeButton } from "../../index"

import { useHistory } from "react-router-dom"

import styles from "./AddressInfo.module.css"

import { useFormik } from 'formik';

const { Title } = Typography
const { Option } = Select
const { Item } = Breadcrumb  

export default function AddressInfo() {

    const history = useHistory()

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          address: null,
          apartment: '',
          city: '',
          email: '',
          zip: null
        },
        onSubmit: values => {
            if(values.firstName !== '' && values.lastName !== '' && values.address !== null
            && values.apartment !== '' && values.city !== '' && values.email !== '' && values.zip !==  null) {
                history.push(routes.checkoutPayment)
            }
        },
      });

    return <div className={styles.CHECKOUT__LEFT_COL} onSubmit={formik.handleSubmit} >
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
        
        <form>

            <Title level={3}> Contact information </Title>

            <Input type="email" placeholder="Email" value={formik.values.email}
            onChange={formik.handleChange} required={true} name="email" />
            
            <Title level={4}> Shipping address </Title>

            <Input type="text" placeholder="First Name" value={formik.values.firstName}
            onChange={formik.handleChange} required={true} name="firstName" />

            <Input type="text" placeholder="Last Name" value={formik.values.lastName}
            onChange={formik.handleChange} required={true} name="lastName" />

            <Input type="text" placeholder="Address" value={formik.values.address}
            onChange={formik.handleChange} required={true} name="address" />

            <Input type="text" placeholder="Apartment, suite etc.(optional)"
            required={false}
            value={formik.values.apartment} onChange={formik.handleChange} name="apartment" />

            <Input type="text" placeholder="City" value={formik.values.city}
            onChange={formik.handleChange} name="city" required={true} />

            <Select showSearch className={styles.CHECKOUT__LEFT_COL__select}
            placeholder="Country"
            optionFilterProp="children"
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            >
                { checkouts.countries.map(country => <Option value={country} key={country} > { country } </Option> ) }
            </Select>
            
            <Input pattern="[0-9]*" name="zip" type="number" value={formik.values.zip}
            onChange={formik.handleChange} required={true} />

            {/* <ThemeButton theme="shop" >
                <Link to={routes.checkoutPayment}>
                    Go to payment
                </Link>
            </ThemeButton>   */}
            <button type="submit"> Continue to payment </button>
        </form>
    </div>
}