import React from "react"
import { Link } from "react-router-dom"
import { Breadcrumb, Input } from "antd"
import routes from "../../../constants/routes.json"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { ThemeButton } from "../../index"
import styles from "./PaymentLeftCol.module.css"

import { useFormik } from "formik"

const { Item } = Breadcrumb

export default function PaymentLeftCol() {

    const [ stateFocus, setFocus ] = React.useState('')

    const formik = useFormik({
        initialValues: {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        },
        onSubmit: values => {
            console.log(values)
        },
    })

    return <div className={styles.PAYMENT__LEFT_COL} >
        <Breadcrumb >
            <Item>
                <Link to={routes.home}> Home </Link>
            </Item>
            <Item>
                <Link to={routes.cart}> Cart </Link>
            </Item>
            <Item>
                <Link to={routes.checkoutAddress}> Address </Link>
            </Item>
            <Item>
                Payment
            </Item>
        </Breadcrumb>
        <Cards
          cvc={formik.values.cvc}
          expiry={formik.values.expiry}
          focused={stateFocus}
          name={formik.values.name}
          number={formik.values.number}
          preview={true}
          acceptedCards={['visa', 'mastercard']}
        />

        <form>
            <Input type="number" placeholder="Card number" name="number"
            maxLength={16} value={formik.values.number} required={true}
            onFocus={e => setFocus(e.target.name) }
            onChange={formik.handleChange} />

            <Input type="text" placeholder="Name" name="name"
            value={formik.values.name} required={true}
            onFocus={e => setFocus(e.target.name)}
            onChange={formik.handleChange} />

            <Input type="number" placeholder="Valid thru" name="expiry"
            maxLength={5} value={formik.values.expiry} required={true}
            onFocus={e => setFocus(e.target.name)}
            onChange={formik.handleChange} />

            <Input type="number" placeholder="CVC" name="cvc"
            maxLength={4} value={formik.values.cvc} required={true}
            onFocus={e => setFocus(e.target.name)}
            onChange={formik.handleChange} />

            {/* <ThemeButton theme="shop"> Complete payment </ThemeButton> */}
            <button type="submit"> Complete payment </button>
        </form>
    </div>
}