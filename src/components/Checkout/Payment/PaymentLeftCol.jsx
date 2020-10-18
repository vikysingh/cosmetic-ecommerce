import React from "react"
import { Link, useHistory } from "react-router-dom"
import { Breadcrumb, Input, Modal, Button } from "antd"
import routes from "../../../constants/routes.json"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
// import { ThemeButton } from "../../index"
import styles from "./PaymentLeftCol.module.css"

import checkouts from "../../../constants/checkouts.json"

import { useFormik } from "formik"



const { Item } = Breadcrumb

export default function PaymentLeftCol() {

    let history = useHistory()

    const [ stateFocus, setFocus ] = React.useState('')
    const [ modalVisible, setModalVisible ] = React.useState(false)

    const formik = useFormik({
        initialValues: {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        },
        onSubmit: values => {
            if((values.number.toString().length === 16) &&
            (values.cvc.toString().length >= 3) &&
            (values.expiry.toString().length >= 4)) {
                setModalVisible(true)
            } else {
                errorModal()
            }
        },
    })

    function handleModalClose() {
        setModalVisible(false)
        history.push(routes.cart)
    }

    function errorModal() {
        Modal.error({
            title: checkouts.notices.formValidationErrorTitle,
            content: checkouts.notices.formValidationErrorMessage
        })
    }

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

        <Modal
        title={checkouts.notices.paymentSuccessTitle}
        visible={modalVisible}
        footer={[
            <Button key="submit" type="primary" onClick={handleModalClose}>
              Ok
            </Button>
        ]} > { checkouts.notices.paymentSuccessMessage } </Modal>

        <Cards
          cvc={formik.values.cvc}
          expiry={formik.values.expiry}
          focused={stateFocus}
          name={formik.values.name}
          number={formik.values.number}
          preview={true}
          acceptedCards={['visa', 'mastercard']}
        />

        <form action="post" onSubmit={formik.handleSubmit} >
            <Input type="number" placeholder="Card number" name="number"
            maxLength={16} minLength={16} value={formik.values.number} required={true}
            onFocus={e => setFocus(e.target.name) }
            onChange={formik.handleChange} />

            <Input type="text" placeholder="Name" name="name"
            value={formik.values.name} required={true}
            onFocus={e => setFocus(e.target.name)}
            onChange={formik.handleChange} />

            <Input type="number" placeholder="Valid thru" name="expiry"
            maxLength={5} minLength={4} value={formik.values.expiry} required={true}
            onFocus={e => setFocus(e.target.name)}
            onChange={formik.handleChange} />

            <Input type="number" placeholder="CVC" name="cvc"
            maxLength={4} minLength={3} value={formik.values.cvc} required={true}
            onFocus={e => setFocus(e.target.name)}
            onChange={formik.handleChange} />

            {/* <ThemeButton theme="shop"> Complete payment </ThemeButton> */}
            <button type="submit" > Complete payment </button>
        </form>
    </div>
}