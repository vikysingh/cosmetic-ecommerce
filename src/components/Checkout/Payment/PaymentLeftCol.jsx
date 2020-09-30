import React from "react"
import { Link } from "react-router-dom"
import { Breadcrumb, Input } from "antd"
import routes from "../../../constants/routes.json"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { ThemeButton } from "../../index"
import styles from "./PaymentLeftCol.module.css"

const { Item } = Breadcrumb

export default function PaymentLeftCol() {

    const [ stateCVC, setCVC ] = React.useState('')
    const [ stateExpiry, setExpiry ] = React.useState('')
    const [ stateFocus, setFocus ] = React.useState('')
    const [ stateName, setName ] = React.useState('')
    const [ stateNumber, setNumber ] = React.useState('')

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
          cvc={stateCVC}
          expiry={stateExpiry}
          focused={stateFocus}
          name={stateName}
          number={stateNumber}
          preview={true}
          acceptedCards={['visa', 'mastercard']}
        />

        <form>
            <Input type="number" placeholder="Card number" name="number"
            maxLength={16}
            onFocus={e => setFocus(e.target.name) }
            onChange={e => setNumber(e.target.value)} />

            <Input type="text" placeholder="Name" name="name"
            onFocus={e => setFocus(e.target.name)}
            onChange={e => setName(e.target.value)} />

            <Input type="number" placeholder="Valid thru" name="expiry"
            maxLength={5}
            onFocus={e => setFocus(e.target.name)}
            onChange={e => setExpiry(e.target.value)} />

            <Input type="number" placeholder="CVC" name="cvc"
            maxLength={4}
            onFocus={e => setFocus(e.target.name)}
            onChange={e => setCVC(e.target.value)} />

            <ThemeButton theme="shop"> Complete payment </ThemeButton>
        </form>
    </div>
}